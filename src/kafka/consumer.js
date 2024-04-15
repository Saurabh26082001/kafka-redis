const { kafka } = require("./client");
const group = process.argv[2];


async function consumer() {
    const consumer = kafka.consumer({ groupId: group })
    await consumer.connect()

    await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: false });


    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                key: message.key.toString(),
                value: JSON.parse(message.value.toString()),
            })
        },
    })
};

consumer();