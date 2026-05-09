// Vetor de dados (Banco de dados simulado)
const usuarios = [
    { email: 'sucesso@teste.com', senha: '123', expirado: false },
    { email: 'expirado@teste.com', senha: '123', expirado: true },
    { email: 'senhaerrada@teste.com', senha: '123', expirado: false }
];

/**
 * Realiza a lógica de login baseada no vetor de usuários.
 */
function realizarLogin(email, senha) {
    const usuario = usuarios.find(u => u.email === email);

    // Regra: Usuário não existe ou Senha incorreta
    if (!usuario || usuario.senha !== senha) {
        throw new Error('As credenciais estão incorretas');
    }

    // Regra: Credenciais expiradas
    if (usuario.expirado) {
        throw new Error('As credenciais expiraram');
    }

    return 'Login realizado com sucesso';
}

module.exports = { realizarLogin };
