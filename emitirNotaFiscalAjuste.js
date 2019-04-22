/**
 * Informações da Nota Fiscal Eletrônica
 * Verificar emissaoNotaFiscal.js
 *
 * A Nota Fiscal de Ajuste é destinada somente para fins específicos de escrituração
 * contábil para empresas de Lucro Normal ou Presumido, não representando saída ou entrada
 * de produtos. Utilizado para nota de crédito de ICMS como transferência, ressarcimento
 * ou restituição do ICMS.
 */

var request = require("request");

var options = {
    method: 'POST',
    url: 'https://webmaniabr.com/api/1/nfe/ajuste/',
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
        operacao: 1,
        natureza_operacao: 'CREDITO ICMS S/ ESTOQUE',
        codigo_cfop: 2.949,
        valor_icms: 1000,
        ambiente: 2,
        cliente:
        {   
            cpf: '000.000.000-00',
            nome_completo: 'Nome completo',
            endereco: 'Av. Brg. Faria Lima',
            complemento: 'Escritório',
            numero: 1000,
            bairro: 'Itaim Bibi',
            cidade: 'São Paulo',
            uf: 'SP',
            cep: '00000-000',
            telefone: '(00) 0000-0000',
            email: 'nome@email.com' 
        } 
    },
    json: true
};


request(options, function(error, response, body){
    if (error) throw new Error(error);

    console.log(body);

    var uuid = body.uuid; // Número único de identificação
    var status = body.status; // aprovado, reprovado, cancelado, processamento ou contingencia 
    var nfe = body.nfe; // Número da NF-e
    var serie = body.serie // Número de série
    var chave = body.chave; // Número da chave de acesso
    var xml = body.xml; // Link para o XML
    var danfe = body.danfe; // Link para DANFE
    var log = body.log // Log de retorno do SEFAZ
});