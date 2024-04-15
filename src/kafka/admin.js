const { kafka } = require('./client');


async function init(options) {
    const admin = kafka.admin();
    console.log("Admin is connecting..");
    await admin.connect();
    console.log("Admin is connected..");

    console.log("topic creating topic...");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            },
            {
                topic: "hotel-updates",
                numPartitions: 1
            }
        ]
    });
    console.log("created topic...");
    console.log("Admin is dissconnecting...");
    await admin.disconnect();
}

init();