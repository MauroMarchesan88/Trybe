const crypto = require('crypto');

function generateToken() {
    return crypto.randomBytes(12).toString('hex');
}

module.exports = generateToken;