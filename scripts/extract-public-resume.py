"""Refresh the browser résumé from the approved public PDF; uses existing PyMuPDF tooling."""
from pathlib import Path
import fitz, hashlib, json
source=Path('assets/documents/jonathan-zamarripa-public-resume.pdf')
blocks=[]
for index,page in enumerate(fitz.open(source)):
    for block in page.get_text('dict')['blocks']:
        if 'lines' not in block: continue
        spans=[s for line in block['lines'] for s in line['spans']]
        text=' '.join(s['text'] for s in spans).strip()
        if text.startswith('Public portfolio résumé') or (index and text in ['Jonathan Iker Zamarripa','Experience, selected work & qualifications','PROFESSIONAL EXPERIENCE · CONTINUED']): continue
        size=round(spans[0]['size'],1)
        kind='h1' if size==26 else 'h2' if size==10.2 else 'h3' if size==10.4 else 'li' if text.startswith('•') else 'p'
        blocks.append({'kind':kind,'text':text.removeprefix('•').strip()})
Path('content/public-resume.json').write_text(json.dumps({'pdfSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'blocks':blocks},ensure_ascii=False,indent=2)+'\n')
