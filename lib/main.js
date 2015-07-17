var request = require('request');
request('http://www.yahoo.com').pipe(process.stdout);
