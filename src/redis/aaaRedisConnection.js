const { Redis } = require('ioredis');

module.exports = new Redis({
    port: 6379, // Redis port
    host: "0.0.0.0", // Redis host
    username: "default", // needs Redis >= 6
    password: "my-top-secret",
    db: 0, // Defaults to 0
}); // by default it 

// // client.set('adsf','asdf')
// // module.exports = client;

