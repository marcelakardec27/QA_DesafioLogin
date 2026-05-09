const assert = require('assert');
const { realizarLogin } = require('../src/Login');

describe('Testes da Função realizarLogin', function() {

    // 1) Teste de Sucesso
    it('Deve retornar sucesso quando email e senha estiverem corretos', function() {
        const resultado = realizarLogin('sucesso@teste.com', '123');
        assert.strictEqual(resultado, 'Login realizado com sucesso');
    });

    // 2) Teste de Credencial Expirada
    it('Deve lançar erro quando as credenciais estiverem expiradas', function() {
        assert.throws(
            () => realizarLogin('expirado@teste.com', '123'),
            { message: 'As credenciais expiraram' }
        );
    });

    // 3) Teste de Usuário não encontrado
    it('Deve lançar erro quando o email não existir no sistema', function() {
        assert.throws(
            () => realizarLogin('naoexiste@teste.com', '123'),
            { message: 'As credenciais estão incorretas' }
        );
    });

    // 4) Teste de Senha incorreta para usuário existente
    it('Deve lançar erro quando a senha estiver incorreta para um email válido', function() {
        assert.throws(
            () => realizarLogin('senhaerrada@teste.com', 'senha_errada'),
            { message: 'As credenciais estão incorretas' }
        );
    });

});