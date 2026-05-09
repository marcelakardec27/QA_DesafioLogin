// Simulação de um sistema de login com regras de negócio - Desafio proposto para validação de testes unitários utilizando Mocha e Assert.
//Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). 
// Adicione ao menos um dos usuarios como expirado sendo true.


const usuarios = [
    { id: 1, nome: 'João', email: 'sucesso@teste.com', senha: '123', expirado: false },
    { id: 2, nome: 'Ana', email: 'credencial@expirada.com', senha: '123', expirado: true },
    { id: 3, nome: 'Bia', email: 'senhaerrada@teste.com', senha: '123', expirado: false }
];

function realizarLogin(email, senha) {
    const usuario = usuarios.find(u => u.email === email);

    // Regra: Credenciais incorretas (Email não existe ou senha errada)
    if (!usuario || usuario.senha !== senha) {
        throw new Error('As credenciais estão incorretas');
    }

    // Regra: Credenciais expiradas
    if (usuario.expirado) {
        throw new Error('Renove suas credenciais');
    }

    return 'Login realizado com sucesso';
}

module.exports = { realizarLogin };