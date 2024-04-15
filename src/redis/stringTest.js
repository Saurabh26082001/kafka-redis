const client = require('./aaaRedisConnection');

async function init() {
    const setValue = await client.set('user100', 'this is value of user100');

    await client.expire('user100', 5);
    const geVal = await client.get('user100');
    console.log(geVal,"*******");
}

init();