// Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

const assert = require('assert');
const { realizarLogin } = require('../src/Login');

describe('Testes de Login', function() {

    // 1) Sucesso
    it('Deve retornar "Login realizado com sucesso"', function() {
        const resultado = realizarLogin('sucesso@teste.com', '123');
        assert.strictEqual(resultado, 'Login realizado com sucesso');
    });

    // 2) Credencial expirada
    it('Deve retornar "Renove suas credenciais" para usuário expirado', function() {
        assert.throws(
            () => realizarLogin('credencial@expirada.com', '123'),
            { message: 'Renove suas credenciais' }
        );
    });

    // 3) Usuário não encontrado
    it('Deve retornar "As credenciais estão incorretas" para email inexistente', function() {
        assert.throws(
            () => realizarLogin('naoexiste@email.com', '123'),
            { message: 'As credenciais estão incorretas' }
        );
    });

    // 4) Senha incorreta para usuário encontrado
    it('Deve retornar "As credenciais estão incorretas" para senha errada', function() {
        assert.throws(
            () => realizarLogin('sucesso@teste.com', 'senha_errada'),
            { message: 'As credenciais estão incorretas' }
        );
    });
});