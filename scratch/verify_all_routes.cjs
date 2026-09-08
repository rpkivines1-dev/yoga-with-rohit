const http = require('http');

const routes = [
  '/',
  '/online-yoga-classes',
  '/free-online-yoga-class',
  '/online-yoga-classes-for-beginners',
  '/hatha-yoga-online-classes',
  '/ashtanga-yoga-online',
  '/live-yoga-classes-online',
  '/schedule',
  '/pricing',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/blog/online-yoga-classes-for-beginners-guide',
  '/blog/what-is-traditional-hatha-yoga',
  '/blog/how-to-start-practicing-yoga-at-home',
  '/blog/hatha-yoga-vs-ashtanga-yoga-difference',
  '/blog/how-live-online-yoga-classes-work',
  '/blog/what-to-expect-first-online-yoga-class',
  '/blog/morning-yoga-routine-for-beginners',
  '/blog/how-often-should-beginners-practice-yoga',
  '/blog/how-to-choose-an-online-yoga-class',
  '/blog/ashtanga-vinyasa-primary-series-guide',
  '/sitemap.xml',
  '/robots.txt'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + route, (res) => {
      resolve({ route, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing ' + routes.length + ' routes on http://localhost:3000...\n');
  let allGood = true;
  for (const route of routes) {
    const result = await checkRoute(route);
    if (result.status === 200) {
      console.log(`[PASS 200] ${result.route}`);
    } else {
      allGood = false;
      console.error(`[FAIL] ${result.route} -> status: ${result.status}, error: ${result.error}`);
    }
  }
  if (allGood) {
    console.log('\nAll ' + routes.length + ' routes verified successfully with HTTP 200 OK!');
  } else {
    console.error('\nSome routes failed.');
    process.exit(1);
  }
}

run();
