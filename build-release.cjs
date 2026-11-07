// Keep vercel.json's build command short while preserving every existing build/QA gate.
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
// Reconstruct the owner's original Contact motion asset from lossless
// repository segments at build time. No third-party CDN or expiring URL.
const partsDir = path.join(__dirname,'build-assets/contact-film');
const parts = fs.readdirSync(partsDir).filter(x=>/^part-\\d+\\.b64$/.test(x)).sort();
if(parts.length !== 11)throw new Error('Contact film segments missing');
const encoded = parts.map(p=>fs.readFileSync(path.join(partsDir,p),'utf8')).join('');
const binary = Buffer.from(encoded,'base64');
if(binary.length !== 6245039 || binary.toString('ascii',4,8)!=='ftyp')throw new Error('Contact film integrity verification failed');
fs.mkdirSync(path.join(__dirname,'assets/video'),{recursive:true});
fs.writeFileSync(path.join(__dirname,'assets/video/portfolio-contact-executive.mp4'),binary);
console.log('PASS: owner-provided contact portrait film reconstructed and validated');
for(const file of [
  'build.cjs',
  'tests/discovery-integrity.cjs',
  'tests/case-study-integrity.cjs',
  'tests/identity-integrity.cjs'
]){
  console.log('> '+file);
  execFileSync(process.execPath,[file],{stdio:'inherit'});
}
