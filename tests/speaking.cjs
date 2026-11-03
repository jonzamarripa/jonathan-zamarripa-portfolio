// Media assertions use the existing ffprobe and pdftotext development tools.
const assert=require('node:assert/strict'),fs=require('node:fs'),cp=require('node:child_process');
const S=require('../content/speaking.json');
for(const asset of [S.video.src,S.video.original]){
 const probe=JSON.parse(cp.execFileSync('ffprobe',['-v','error','-show_entries','stream=codec_type:format=duration','-of','json','.'+asset]));
 assert.equal(probe.streams.filter(s=>s.codec_type==='video').length,1);
 assert.equal(probe.streams.filter(s=>s.codec_type==='audio').length,0,'Must remove audio, not merely mute a player');
 assert(Number(probe.format.duration)>9&&Number(probe.format.duration)<11);
}
const html=fs.readFileSync('speaking/index.html','utf8');
assert(!/<video[^>]*autoplay/i.test(html));assert(/<video[^>]*controls[^>]*preload="none"/.test(html));
assert(html.includes('AI-generated speaker promo'));assert(html.includes('not a recording of a live event'));
assert(!html.includes('TEDx'));assert(!/application\/ld\+json[^>]*>[\s\S]*?"@type":"Event"/.test(html));
assert.equal((html.match(/class="sp-talk"/g)||[]).length,3);
for(const talk of S.talks) assert(html.includes('topic='+encodeURIComponent(talk.id)));
const normalize=s=>s.replace(/\s+/g,' ').trim();
const pdfText=cp.execFileSync('pdftotext',['.'+S.sheet,'-']).toString();
assert(!/Atlanta|summa cum laude|Certified Instructional Designer/.test(pdfText));
assert(pdfText.includes('10.5281/zenodo.23889919'));
for(const talk of S.talks)assert(normalize(pdfText).includes(normalize(talk.title)),'Public PDF must match the current talk titles');
assert(!/<(?:iframe|embed|object)\b/.test(html));
assert(fs.readFileSync('content/analytics-paths.json','utf8').includes('/speaking/'));
console.log('PASS: audio-free 10-second variants, opt-in playback, synthetic-media disclosure, three talk inquiries, location-free public PDF and indexable route');
