const setup = async () => {
    const logger = require("./logger");
    const app = require("./app");
    const connectWithDb = require("./db")
    return {app, logger, connectWithDb};
};

module.exports = {setup};
