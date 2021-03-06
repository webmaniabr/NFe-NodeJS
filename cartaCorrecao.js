/**
* Informações da Carta de Correção
*
* A Carta de Correção Eletrônica (CC-e) é um evento legal e tem por objetivo
* corrigir algumas informações da NF-e que já foi emitida.
*/

var request = require("request");

var options = { method: 'POST',
  url: 'https://webmaniabr.com/api/1/nfe/cartacorrecao/',
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
      chave: '00000000000000000000000000000000000000000000',
      correcao: 'O CFOP correto é 5.102 referente a revenda tributada no mesmo estado.'
    },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  var status = body.status; // aprovado, reprovado, cancelado, processamento ou contingencia
  var xml = body.xml; // Link para o XML
  var dacce = body.dacce; // Link para dacce
  var log = body.log; // Log de retorno do SEFAZ

});
