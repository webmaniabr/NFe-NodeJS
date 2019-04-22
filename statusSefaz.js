/**
 * Status do Sefaz
 *
 * OBS: A utilização do endpoint deve ser realizada como demonstrativo do Status do
 * Sefaz em sua plataforma, sendo necessário trabalhar com cache de ao menos 10 minutos.
 * Não é necessário realizar a requisição antes da emissão de cada Nota Fiscal,
 * porque este procedimento é realizado de forma automática em todos os endpoints.
 */

var request = require("request");

var options = { method: 'GET',
  url: 'https://webmaniabr.com/api/1/nfe/sefaz/',
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

  var status = body.status; // Online, Offline

});
