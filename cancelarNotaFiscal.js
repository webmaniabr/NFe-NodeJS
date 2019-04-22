/**
* Cancelar Nota Fiscal
*
* Atenção: Somente poderá ser cancelada uma NF-e cujo uso tenha sido previamente
* autorizado pelo Fisco e desde que não tenha ainda ocorrido o fato gerador, ou seja,
* ainda não tenha ocorrido a saída da mercadoria do estabelecimento. Atualmente o prazo
* máximo para cancelamento de uma NF-e é de 24 horas (1 dia), contado a partir da autorização
* de uso. Caso já tenha passado o prazo de 24 horas ou já tenha ocorrido a circulação da
* mercadoria, emita uma NF-e de devolução para anular a NF-e anterior.
*/

var request = require("request");

var options = { method: 'PUT',
  url: 'https://webmaniabr.com/api/1/nfe/cancelar/',
  headers:
  { 
    'x-access-token-secret': 'SEU_CONSUMER_KEY',
    'x-access-token': 'SEU_CONSUMER_SECRET',
    'x-consumer-secret': 'SEU_ACCESS_TOKEN',
    'x-consumer-key': 'SEU_ACCESS_TOKEN_SECRET',
    'content-type': 'application/json',
    'cache-control': 'no-cache' 
  },
  body:
  { 
    chave: '00000000000000000000000000000000000000000000',
    motivo: 'Cancelamento por motivos administrativos.'
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  var status = body.status; // aprovado, reprovado, cancelado, processamento ou contingencia 
  var xml = body.xml; // Link para o XML
  var log = body.log; // Log de retorno do SEFAZ

});
