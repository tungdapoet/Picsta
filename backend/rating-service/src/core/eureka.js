const { Eureka } = require('eureka-js-client');


const port = process.env.PORT || 3000;

const eurekaClient = new Eureka({
    instance: {
        app: 'rating-service',
        instanceId: 'rating-service-instance',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: `http://localhost:${port}`,
        port: {
            '$': port,
            '@enabled': 'true',
        },
        vipAddress: 'rating-service',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 30761,
        servicePath: '/eureka/apps/'
    },
});

module.exports = eurekaClient;
