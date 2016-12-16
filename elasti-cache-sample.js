const request = require('request');

const headers = {
  'Content-Type':'application/json'
};

const options = {
  url: 'http://qiita.com/api/v2/schema',
  method: 'GET',
  headers: headers
};

request(options, (error, response, body) => {
  console.log(response);
});
