/**
* Produtos - Com detalhamento específico de Rastreabilidade
* A array dos produtos devem ser montadas de acordo com as informações
* do produto no Banco de Dados da sua plataforma
*/

var request = require("request");

var options = { 
  method: 'POST',
  url: 'https://webmaniabr.com/api/1/nfe/emissao/',
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
     ID: 1137,
     url_notificacao: 'https://webmaniabr.com/retorno.php',
     operacao: 1,
     natureza_operacao: 'Venda de produção do estabelecimento',
     modelo: 1,
     finalidade: 1,
     ambiente: 2,
     cliente:
     { 
        cpf: '000.000.000-00',
        nome_completo: 'Miguel Pereira da Silva',
        endereco: 'Av. Anita Garibaldi',
        complemento: 'Sala 809 Royal',
        numero: 850,
        bairro: 'Ahú',
        cidade: 'Curitiba',
        uf: 'PR',
        cep: '80540-180',
        telefone: '(41) 4063-9102',
        email: 'suporte@webmaniabr.com' 
      },
     produtos:
      [ { 
          nome: 'Nome do produto',
          codigo: 'nome-do-produto',
          gtin: '0789602015376',
          ncm: '6109.10.00',
          cest: '28.038.00',
          cnpj_produtor: '00.000.000/0000-00∂',
          quantidade: 3,
          unidade: 'UN',
          peso: '0.800',
          origem: 0,
          subtotal: '44.90',
          total: '134.70',
          classe_imposto: 'REF1637',
          rastro: {
            lote: '000001', 
            quantidade: '100',
            data_fabricacao: '2018-01-01',
            data_validade: '2020-01-01'
         }
        }
      ],
     pedido:
      { 
        pagamento: 0,
        presenca: 2,
        modalidade_frete: 0,
        frete: '12.56',
        desconto: '10.00',
        total: '174.60' 
      },
     transporte:
      { 
        cnpj: '00.000.000/0000-00',
        razao_social: 'Transportes LTDA',
        ie: '123.456.789.123',
        endereco: 'Av. Anita Garibaldi',
        uf: 'PR',
        cidade: 'Curitiba',
        cep: '80540-180' 
      } 
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
