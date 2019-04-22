var request = require("request");

var options = { method: 'GET',
  url: 'https://webmaniabr.com/api/1/nfe/certificado/',
  headers:
    { 
      'content-type': 'application/json',
      'cache-control': 'no-cache',
      'x-access-token-secret': 'SEU_CONSUMER_KEY',
      'x-access-token': 'SEU_CONSUMER_SECRET',
      'x-consumer-secret': 'SEU_ACCESS_TOKEN',
      'x-consumer-key': 'SEU_ACCESS_TOKEN_SECRET'
    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  var expiration = body.expiration; // Dias restantes
  
});
