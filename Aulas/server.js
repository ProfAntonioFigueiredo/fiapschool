// importando o módulo HTTP
const http = require('http');

// configurando as informações do servidor
const hostname = '127.0.0.1';
const port = 3000;

// criando o servidor usando uma função com nome diferente
const meuservidor = http.createServer((req, res) => {
    // configurando o cabeçalho
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // enviando mensagem de resposta
    res.end('Bem vindo ao meu servidor Node.js\n');
});

// iniciando o servidor e executando a porta especificada
meuservidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});