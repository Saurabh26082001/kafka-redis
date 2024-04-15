const express = require('express');
const axios = require('axios').default;
const client = require('./src/redis/aaaRedisConnection')
const app = express();

app.get('/', async(req, res)=>{

    const cacheValues = await client.get('todos');
    if(cacheValues) return res.json(JSON.parse(cacheValues));

    console.log("...");
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});



// KAFKA_CLUSTERS_0_NAME: local
// KAFKA_CLUSTERS_0_BOOTSTRAP_SERVERS: kafka:9092
// KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181