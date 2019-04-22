var request = require("request");

var options = { method: 'POST',
  url: 'https://webmaniabr.com/api/1/nfe/devolucao/',
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
      natureza_operacao: 'Devolução de venda de produção do estabelecimento',
      codigo_cfop: '1.202',
      produtos: [ 2, 3 ],
      ambiente: '2' 
    },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);

  var uuid = body.uuid; // Número único de identificação
  var status = body.status; // aprovado, reprovado, cancelado, processamento ou contingencia
  var nfe = body.nfe; // Número da NF-e
  var serie = body.serie; // Número de série
  var recibo = body.recibo; // Número do recibo
  var chave = body.chave; // Número da chave de acesso
  var xml = body.xml; // Link para o XML
  var danfe = body.danfe; // Link para DANFE
  var log = body.log; // Log de retorno do SEFAZ
  
});
