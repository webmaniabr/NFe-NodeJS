var request = require("request");

var options = { method: 'GET',
  url: 'https://webmaniabr.com/api/1/nfe/consulta/',
  qs:
   { chave: '45150819652219000198550990000000011442380343',
     ambiente: '1' },
  headers:
  { 'x-access-token-secret': 'SEU_CONSUMER_KEY',
    'x-access-token': 'SEU_CONSUMER_SECRET',
    'x-consumer-secret': 'SEU_ACCESS_TOKEN',
    'x-consumer-key': 'SEU_ACCESS_TOKEN_SECRET',
    'content-type': 'application/json',
    'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
