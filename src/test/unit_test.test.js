const assert = require('../core/assert/assert');
const sqr = require('../core/sqr/sqr');
var User = require('../core/user/user');

function main() {
    assert('Pessoa' === 'Pessoa', 'Testing string');

    assert(sqr(3) === 9, 'Testing sqr');

    var admim = new User('admin', '123456');
    assert(admim.auth('admin', '123456'), 'Testing auth');
}

main();




// refatoração
// console.log('Testing string')
// assert('Pessoa' === 'Pessoa');

// console.log('Testing sqr');
// assert(sqr(3) === 9);

// console.log('Testing auth');
// var admim = new User('admin', '123456');
// assert(admim.auth('admin', '123456'));

