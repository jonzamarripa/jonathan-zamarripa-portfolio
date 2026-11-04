// Creative Lab v5 — scoped production preparation; no new application backend.
const fs=require('fs');
const postcss=require('postcss');
const file='creative-lab-v5.css';
const original=fs.readFileSync(file,'utf8');
const marker='/* CREATIVE_LAB_V5_SCOPED */\n';
if(!original.startsWith(marker)){
  const root=postcss.parse(original);
  root.walkRules(rule=>{
    let parent=rule.parent;
    while(parent&&parent.type!=='root'){
      if(parent.type==='atrule'&&/keyframes/i.test(parent.name))return;
      parent=parent.parent;
    }
    rule.selectors=rule.selectors.map(selector=>{
      if(selector===':root'||selector==='html'||selector==='body')return '#creative-lab-v5-root';
      if(selector==='body.is-locked')return selector;
      return '#creative-lab-v5-root '+selector;
    });
  });
  fs.writeFileSync(file,marker+root.toString());
}
require('./build.cjs');
