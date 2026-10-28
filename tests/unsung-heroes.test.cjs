const assert=require('node:assert/strict');
const fs=require('node:fs');const vm=require('node:vm');
const context={window:{}};vm.runInNewContext(fs.readFileSync('content/unsung-heroes.js','utf8'),context);
const data=context.window.UnsungHeroesData,manifest=JSON.parse(fs.readFileSync('content/unsung-heroes-media.json','utf8'));
assert.equal(data.stages.length,5);assert.equal(data.artifacts.length,9);
for(const stage of data.stages){for(const field of ['id','name','objective','scaffold','action','teacher'])assert.ok(stage[field],`${stage.id}: ${field}`);assert.equal(stage.choices.filter(c=>c.correct).length,1);assert.ok(stage.choices.every(c=>c.feedback));}
for(const segment of data.transcript){assert.ok(segment.kind==='Educational interpretation'||segment.sources.length>0);for(const id of segment.sources)assert.ok(data.sources.some(s=>s.id===id));}
assert.deepEqual(Array.from(data.categories),['Archive','Recollection','Original Plan','Reconstruction 2026','Pending']);
assert.ok(manifest.lanes.every(l=>l.src===null));assert.ok(manifest.cues.every(c=>c.start===null&&c.end===null));assert.deepEqual(manifest.cues.map(c=>c.id),Array.from(data.transcript,s=>s.id));
const html=fs.readFileSync('work/unsung-heroes/index.html','utf8');
assert.equal((html.match(/class="jiz-chapter"/g)||[]).length,8);assert.ok(html.includes('href="/work/unsung-heroes/#uh-studio"'));assert.ok(html.includes('href="/work/unsung-heroes/#main-content"'));assert.ok(!html.includes('Robert Smalls'));assert.ok(!html.includes('<audio'));assert.ok(html.includes('2026 reconstruction'));assert.ok(html.includes('rel="canonical" href="https://www.jonathanzamarripa.com/work/unsung-heroes/"'));
const bundle=fs.readFileSync('dist/site.js','utf8');new vm.Script(bundle);
console.log('PASS: stage contracts, evidence categories, source mapping, empty media/cue contract, eight SSR chapters, route anchors, no fake audio, metadata and bundle syntax.');
