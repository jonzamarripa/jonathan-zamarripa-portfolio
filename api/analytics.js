// Explicit anonymous events only. No SDK, automatic capture, IP forwarding or form data.
const EVENTS = new Set(['$pageview', 'case_study_view', 'resume_click', 'contact_success', 'contact_email_click']);
const PATHS = new Set(require('../content/analytics-paths.json'));
const SOURCES = new Set(['direct', 'internal', 'linkedin', 'google', 'bing', 'other']);
const DEVICES = new Set(['mobile', 'tablet', 'desktop']);
const ORIGINS = new Set(['https://www.jonathanzamarripa.com', 'https://jonathanzamarripa.com']);
module.exports = async function analytics(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).end(); }
  if (!ORIGINS.has(req.headers.origin)) return res.status(403).end();
  if (req.headers.dnt === '1' || req.headers['sec-gpc'] === '1') return res.status(204).end();
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) return res.status(415).end();
  if (Number(req.headers['content-length']) > 2048) return res.status(413).end();
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return res.status(400).end(); }
  if (!body || JSON.stringify(body).length > 2048 || !EVENTS.has(body.event) || !PATHS.has(body.path) || !/^[a-f0-9-]{36}$/i.test(body.id || '') || !SOURCES.has(body.source) || !DEVICES.has(body.device)) return res.status(400).end();
  if (body.event === 'case_study_view' && !body.path.startsWith('/work/')) return res.status(400).end();
  const token = process.env.POSTHOG_PROJECT_TOKEN, host = process.env.POSTHOG_API_HOST;
  if (!token || !['https://us.i.posthog.com', 'https://eu.i.posthog.com'].includes(host)) return res.status(503).end();
  try {
    const response = await fetch(host + '/i/v0/e/', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(3500),
      body: JSON.stringify({ api_key: token, distinct_id: body.id, event: body.event, properties: {
        $process_person_profile: false, $geoip_disable: true, $ip: null,
        $current_url: 'https://www.jonathanzamarripa.com' + body.path, $pathname: body.path,
        source: body.source, device: body.device, site: 'jonathanzamarripa.com',
        // This flag permits separate verification without inflating normal traffic reports.
        verification: req.headers['x-jiz-verification'] === '1'
      } })
    });
    return res.status(response.ok ? 202 : 502).end();
  } catch { return res.status(502).end(); }
};
