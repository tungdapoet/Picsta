const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ExpressPinoLogger = require("express-pino-logger");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const {kafkaConsumer} = require('./kafka');
require('fs');
const logger = ExpressPinoLogger({
    serializers: {
    },
});
rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 1000 requests per windowMs
});
const app = express();
require("dotenv").config();
require("compression");
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(logger)
kafkaConsumer();
app.set('view engine', 'ejs')


module.exports = app;
