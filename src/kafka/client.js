const { Kafka, logLevel} = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "my-app",         // Your application name
  brokers: ["localhost:9092"], // HOST: PORT   we can have multiple brokers
  logLevel: logLevel.ERROR
});