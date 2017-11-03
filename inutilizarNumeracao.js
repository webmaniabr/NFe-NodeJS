var request = require("request");

var options = { method: 'PUT',
  url: 'https://webmaniabr.com/api/1/nfe/inutilizar/',
  headers:
   { 'x-access-token-secret': 'SEU_CONSUMER_KEY',
     'x-access-token': 'SEU_CONSUMER_SECRET',
     'x-consumer-secret': 'SEU_ACCESS_TOKEN',
     'x-consumer-key': 'SEU_ACCESS_TOKEN_SECRET',
     'content-type': 'application/json',
     'cache-control': 'no-cache' },
  body:
   { sequencia: '101-109',
     motivo: 'Inutilização por problemas técnicos.',
     ambiente: '1',
     serie: '99',
     modelo: '1' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
