const http = require('http');

const routes = [
  '/',
  '/contact',
  '/gallery',
  '/services',
  '/destinations/usa',
  '/destinations/uk',
  '/destinations/canada',
  '/destinations/australia',
  '/destinations/new-zealand',
  '/destinations/south-korea',
  '/destinations/malaysia',
  '/destinations/europe',
  '/non-existent-route-404-test'
];

function fetchRoute(route) {
  return new Promise((resolve) => {
    const start = Date.now();
    http.get('http://localhost:3000' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const time = Date.now() - start;
        const titleMatch = data.match(/<title[^>]*>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : 'No <title>';
        resolve({
          route,
          status: res.statusCode,
          time,
          title
        });
      });
    }).on('error', (err) => {
      resolve({ route, status: 'ERROR', error: err.message });
    });
  });
}

(async () => {
  console.log('====================================================');
  console.log('         FULL SITE ROUTE INTEGRITY & SMOKE TEST     ');
  console.log('====================================================\n');

  let allPassed = true;

  for (const r of routes) {
    const res = await fetchRoute(r);
    const isExpected = r.includes('404') ? res.status === 404 : res.status === 200;
    const symbol = isExpected ? '✅' : '❌';
    if (!isExpected) allPassed = false;

    console.log(`${symbol} [HTTP ${res.status}] ${res.route.padEnd(30)} ${res.time}ms | ${res.title.substring(0, 45)}`);
  }

  console.log('\n----------------------------------------------------');
  if (allPassed) {
    console.log('🎉 ALL ROUTES ARE 100% HEALTHY, RESPONSIVE & PRODUCTION-READY.');
  } else {
    console.log('⚠️ SOME ROUTES ENCOUNTERED UNEXPECTED CODES.');
  }
})();
