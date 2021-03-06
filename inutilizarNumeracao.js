var request = require("request");

var options = { method: 'PUT',
  url: 'https://webmaniabr.com/api/1/nfe/inutilizar/',
  headers:
    { 
      'content-type': 'application/json',
      'cache-control': 'no-cache',
      'x-access-token-secret': 'SEU_CONSUMER_KEY',
      'x-access-token': 'SEU_CONSUMER_SECRET',
      'x-consumer-secret': 'SEU_ACCESS_TOKEN',
      'x-consumer-key': 'SEU_ACCESS_TOKEN_SECRET'
    },
  body:
    { 
      sequencia: '101-109',
      motivo: 'Inutilização por problemas técnicos.',
      ambiente: '2',
      serie: '99',
      modelo: '1' 
    },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  var xml = body.xml; // Link para XML
  var log = body.log; // Log de retorno do SEFAZ

});
