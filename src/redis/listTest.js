const client = require('./aaaRedisConnection');

async function init() {
    const setValue = await client.lpush('K1', 'this is value of K! list');

    // await client.expire('user100', 5);
    console.log(await client.llen("K1"),"length of list;   K1");
    const geVal = await client.lpop('K1');
    console.log(geVal,"****POPED value***");
}

init();