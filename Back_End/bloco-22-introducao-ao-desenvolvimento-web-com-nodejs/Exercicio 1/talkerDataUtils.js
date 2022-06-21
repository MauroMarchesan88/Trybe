function checkTalkName(name) {
    let final = name;
    if (!name || name === '') {
        final = 'O campo "name" é obrigatório';
        return final;
    }
    if (name.length < 3) {
        final = 'O "name" deve ter pelo menos 3 caracteres';
        return final;
    }
    return final;
}
function checkAge(age) {
    let final = age;
    if (age < 18) {
        final = 'A pessoa palestrante deve ser maior de idade';
        return final;
    }
    if (!age || age === '') {
        final = 'O campo "age" é obrigatório';
        return final;
    }
    return final;
}

function checkTalk(talk) {
    let final = talk;
    if (!talk || talk === '') {
        final = 'O campo "talk" é obrigatório';
        return final;
    }
    return final;
}

function checkWatchedAt(watchedAt) {
    let final = watchedAt;
    if (!watchedAt || watchedAt === '') {
        final = 'O campo "watchedAt" é obrigatório';
        return final;
    }
    const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    if (!regex.test(watchedAt)) {
        final = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
        return final;
    }
    return final;
}

function checkRate(rate) {
    let final = rate;
    if (rate === undefined || rate === '') {
        final = 'O campo "rate" é obrigatório';
        return final;
    }
    if (rate < 1 || rate > 5) {
        final = 'O campo "rate" deve ser um inteiro de 1 à 5';
        return final;
    }
    return final;
}

function checkTalkDetails(talk) {
    const { watchedAt, rate } = talk;
    const watchedCheck = checkWatchedAt(watchedAt);
    if (watchedAt !== watchedCheck) return watchedCheck;
    const rateCheck = checkRate(rate);
    if (rate !== rateCheck) return rateCheck;
}

function afterChecks(name, age, talk) {
    const checkedName = checkTalkName(name);
    if (name !== checkedName) return { status: 400, message: checkedName };
    const checkedage = checkAge(age);
    if (age !== checkedage) return { status: 400, message: checkedage };
    const checkedTalk = checkTalk(talk);
    if (talk !== checkedTalk) return { status: 400, message: checkedTalk };
    const talkDetails = checkTalkDetails(talk);
    if (talkDetails) return { status: 400, message: talkDetails };
}

module.exports = afterChecks;