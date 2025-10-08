import crypto from 'crypto';

function hash(message) {
    hash.update(message);
    return hash.digest('hex');
}

module.exports = hash()