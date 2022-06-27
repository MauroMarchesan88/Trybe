function checkMail(email) {
    const reg = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
    const result = reg.exec(email);
    let final = email;
    if (!email || email === '') {
        final = 'O campo "email" é obrigatório';
        return final;
    }
    if (!result) {
        final = 'O "email" deve ter o formato "email@email.com"';
        return final;
    }
    return final;
}

function checkPwd(password) {
    let final = password;
    if (!password || password === '') {
        final = 'O campo "password" é obrigatório';
        return final;
    }
    if (password.length < 4 || password.length > 8) {
        final = 'Password tem que ter minimo 4 e maximo 8 caracteres';
        return final;
    }
    return final;
}

module.exports = { checkMail, checkPwd };