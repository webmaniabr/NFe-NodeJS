# NFe-NodeJS

Através do emissor de Nota Fiscal da WebmaniaBR®, você conta com a emissão e arquivamento das suas notas fiscais, cálculo automático de impostos, geração do Danfe para impressão e envio automático de e-mails para os clientes. Realize a integração com o seu sistema utilizando a nossa REST API.

- Emissor de NF-e da WebmaniaBR®: [Saiba mais](https://webmaniabr.com/smartsales/nota-fiscal-eletronica/)
- Documentação da REST API: [Visualizar](https://webmaniabr.com/docs/rest-api-nfe/)

## Requisitos

- Contrate um dos planos de Nota Fiscal Eletrônica da WebmaniaBR® a partir de R$29,90/mês: [Assine agora mesmo](https://webmaniabr.com/smartsales/nota-fiscal-eletronica/).
- Realize a integração com o seu sistema.

## Exemplos

Desenvolvimento baseado a classe nativa [http module](https://nodejs.org/api/http.html).

- **statusSefaz**: Verifica se o Sefaz está Online ou Offline.
- **validadeCertificado**: Verifica se o Certificado A1 é válido e quantos dias faltam para expirar.
- **emissaoNotaFiscal**: Emissão da Nota Fiscal junto ao SEFAZ.
- **consultaNotaFiscal**: Consulta o status da Nota Fiscal enviada para o SEFAZ.
- **cancelarNotaFiscal**: Cancelar Nota Fiscal enviada ao SEFAZ.
- **inutilizarNumeracao**: Inutilizar sequência de numeração junto ao SEFAZ.
- **cartaCorrecao**: Corrigir uma Nota Fiscal junto ao SEFAZ.
- **devolucaoNotaFiscal**: Emissão de Nota Fiscal de devolução junto ao SEFAZ.
- **retornoNotaFiscal**: Exemplo de retorno obtido através da url_notificacao.

## Suporte

Qualquer dúvida entre em contato na nossa [Central de Ajuda](https://ajuda.webmaniabr.com) ou acesse o [Painel de Controle](https://webmaniabr.com/painel/) para conversar em tempo real no Chat ou Abrir um chamado.
