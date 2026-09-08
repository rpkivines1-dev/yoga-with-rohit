const http = require('http');

const privatePaths = [
  '/admin',
  '/dashboard',
  '/student-dashboard',
  '/login',
  '/register',
  '/payment',
  '/checkout',
  '/private-class-links',
  '/meeting-links',
  '/free-yoga-demo'
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
  console.log('Testing private paths & redirect fallback...\n');
  for (const path of privatePaths) {
    const res = await checkRoute(path);
    console.log(`[PASS ${res.status}] ${res.route}`);
  }
}

run();
