// Keep vercel.json's build command short while preserving every existing build/QA gate.
const { execFileSync } = require('node:child_process');
for(const file of [
  'build.cjs',
  'tests/discovery-integrity.cjs',
  'tests/case-study-integrity.cjs',
  'tests/identity-integrity.cjs'
]){
  console.log('> '+file);
  execFileSync(process.execPath,[file],{stdio:'inherit'});
}
