/**
 * Informações da Nota Fiscal Complementar
 *
 * A Nota Fiscal Complementar é destinada para acrescentar dados e valores
 * não informados no documento fiscal original. Utilizado para acréscimo no preço
 * e quantidade da mercadoria ou somar valores faltantes dos impostos ICMS, ICMS-ST e IPI.
 *
 * OBS: Deve ser complementado o Preço/Quantidade OU Impostos.
 * OB2: Caso deseje complementar as duas opções devem ser emitidas NF-e separadas.
 */

var request = require("request")

var options = { 
    method: 'POST',
    url: 'https://webmaniabr.com/api/1/nfe/complementar/',
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
        nfe_referenciada: '00000000000000000000000000000000000000000000',
        operacao: 1,
        natureza_operacao: 'Natureza da operação',
        ambiente: 2,
        cliente:
        { 
            cpf: '000.000.000-00',
            nome_completo: 'Nome completo',
            endereco: 'Av. Brg. Faria Lima',
            complemento: 'Escritorio',
            numero: 1000,
            bairro: 'Itaim Bibi',
            cidade: 'São Paulo',
            uf: 'SP',
            cep: '00000-000',
            telefone: '(00) 0000-0000',
            email: 'nome@email.com' 
        },
        impostos : 
        {
            icms: 
            {
                codigo_cfop: '6.102',
                situacao_tributaria: '101',
                bc_icms: '100.00',
                valor_icms: '18.00'
            }
        }
    },
    json: true
}

request(options, function(error, response, body){
    if (error) throw new Error(error);

    console.log(body);

    var uuid = body.uuid; // Número único de identificação
    var status = body.status; // aprovado, reprovado, cancelado, processamento ou contingencia
    var nfe = body.nfe; // Número da NF-e
    var serie = body.serie; // Número de série
    var chave = body.chave; // Número da chave de acesso
    var xml = body.xml; // Link para o XML
    var danfe = body.danfe; // Link para DANFE
    var log = body.log; // Log de retorno do SEFAZ

});