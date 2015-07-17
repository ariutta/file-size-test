var hyperquest = require('hyperquest');
hyperquest('http://www.yahoo.com').pipe(process.stdout);
