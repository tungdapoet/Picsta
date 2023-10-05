const { Kafka } = require('kafkajs');

const kafkaConsumer = async () => {
    try {
        const kafka = new Kafka({
            clientId: 'rating-service',
            brokers: [process.env.KAFKA_URL]
        });

        const consumer = kafka.consumer({ groupId: 'test-group' });

        console.log('Connecting...');
        await consumer.connect();
        console.log('Connected!');

        await consumer.subscribe({ topic: 'userIds', fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log('Received userId:', message.value.toString());
            },
        });
    }
    catch (e) {
        console.error(`Error in consumer: ${e.message}`, e);
    }
};

const kafkaProducer = async (message) => {
    try {
        const kafka = new Kafka({
            clientId: 'rating-service',
            brokers: [process.env.KAFKA_URL]
        });

        const producer = kafka.producer();

        console.log('Connecting...');
        await producer.connect();
        console.log('Connected!');

        const result = await producer.send({
            topic: 'userIds',
            messages: [
                { value: message }
            ]
        });

        console.log('Sent message:', result);
        await producer.disconnect();
    }
    catch (e) {
        console.error(`Error in producer: ${e.message}`, e);
    }
};

module.exports = {kafkaConsumer, kafkaProducer};
