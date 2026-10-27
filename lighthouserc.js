// Report to GitHub Action artifacts, never public temporary storage.
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'python3 -u -m http.server 4173 --bind 127.0.0.1 2>&1',
      startServerReadyPattern: 'Serving HTTP on',
      url: [
        'http://127.0.0.1:4173/',
        'http://127.0.0.1:4173/work/the-first-sentence/'
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--headless --no-sandbox'
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.55 }],
        'categories:accessibility': ['warn', { minScore: 0.85 }],
        'categories:best-practices': ['warn', { minScore: 0.80 }],
        'categories:seo': ['warn', { minScore: 0.80 }]
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci-reports'
    }
  }
};
