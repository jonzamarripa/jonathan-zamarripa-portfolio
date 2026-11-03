"""Build the location-free public speaker sheet from content/speaking.json."""
import json, hashlib
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
S=json.loads(Path('content/speaking.json').read_text())
for name,file in [('Sheet','DejaVuSans.ttf'),('SheetBold','DejaVuSans-Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,'/usr/share/fonts/truetype/dejavu/'+file))
INK='#101719';PAPER='#F4F1EA';TEAL='#236E70';AMBER='#E3A24C'
path=Path('assets/documents/jonathan-zamarripa-public-speaker-sheet.pdf')
c=canvas.Canvas(str(path),pagesize=(612,792));c.setTitle('Jonathan Iker Zamarripa — Public Speaker Sheet');c.setAuthor(S['name']);c.setSubject('speaking-content-sha256:'+hashlib.sha256(Path('content/speaking.json').read_bytes()).hexdigest())
def text(x,y,value,size=9,color=INK,bold=False):
 c.setFont('SheetBold' if bold else 'Sheet',size);c.setFillColor(HexColor(color));c.drawString(x,y,value)
def paragraph(x,y,value,width,size=9,leading=13,color=INK,bold=False):
 p=Paragraph(escape(value),ParagraphStyle('p',fontName='SheetBold' if bold else 'Sheet',fontSize=size,leading=leading,textColor=HexColor(color)))
 w,h=p.wrap(width,700);p.drawOn(c,x,y-h);return y-h
c.setFillColor(HexColor(PAPER));c.rect(0,0,612,792,fill=1,stroke=0)
c.setFillColor(HexColor(INK));c.rect(0,616,612,176,fill=1,stroke=0)
c.drawImage('assets/imagery/speaking/speaker-portrait.jpeg',0,616,width=176,height=176,preserveAspectRatio=True,anchor='c',mask='auto')
text(199,758,'SPEAKER · AUTHOR · DESIGNER',8,AMBER)
text(198,720,'JONATHAN IKER',23,PAPER,True);text(198,691,'ZAMARRIPA',23,PAPER,True)
text(199,665,'Founder, Cinematic Learning Systems',9,PAPER)
text(199,644,'CLPF v1.1 · doi:10.5281/zenodo.23889919',8,AMBER)
c.linkURL(S['publication']['url'],(199,638,570,654),relative=0)
text(199,627,'jonathan.zamarripa@gmail.com',8,'#CBD3D0')
text(36,589,'ABOUT THE SPEAKER',8,TEAL,True)
bottom=paragraph(36,574,S['bio'],540,size=9.2,leading=13)
text(36,bottom-21,'Published openly. Practitioner-theorist framework; not empirically validated.',8,TEAL)
text(36,435,'TALKS & CONVERSATIONS',8,TEAL,True)
for i,t in enumerate(S['talks']):
 x=36+i*186
 c.setStrokeColor(HexColor(TEAL if i==0 else AMBER));c.setLineWidth(2);c.line(x,419,x+168,419)
 text(x,401,f"0{i+1} · {t['category'].upper()}",7.3,TEAL)
 y=paragraph(x,386,t['title'],168,size=16,leading=18,bold=True)
 y=paragraph(x,y-15,t['description'],168,size=8.4,leading=12)
 paragraph(x,y-15,'Best for: '+t['audience']+'.',168,size=7.8,leading=11,color=TEAL)
c.setFillColor(HexColor(INK));c.rect(0,47,612,88,fill=1,stroke=0)
text(36,115,'FORMATS',8,AMBER,True)
for i,f in enumerate(S['formats']):
 x=36+i*140;text(x,92,f['name'],8.5,PAPER,True)
 paragraph(x,82,f['duration'],125,size=7.6,leading=11,color='#CBD3D0')
text(36,27,'jonathanzamarripa.com/speaking/',8,TEAL)
c.linkURL('https://www.jonathanzamarripa.com/speaking/',(36,21,350,39),relative=0)
text(424,27,'Public speaker sheet',7.5,TEAL)
c.save();print(path)
