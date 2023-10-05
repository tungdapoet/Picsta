const {setup: setupCore} = require('./src/core');
const {init} = require('./src/modules')
const {handleRequest, handleError} = require('./src/common/middlewares')
const eurekaClient = require('./src/core/eureka')
require('dotenv').config()

const PORT = process.env.PORT

const start = async () => {
    const initModules = async (app) => await init(app)

    const initRoutes = async (app) => {
        app.use(handleRequest)
        const server = await initModules(app)
        server.use(handleError)
        return server
    }

    const {app, logger, connectWithDb} = await setupCore();

    try {
        await initRoutes(app);
        app.listen(PORT, async () => {
            logger.info(`Server started on port ${PORT}`)
            eurekaClient.start(error => {
                console.log(error || 'Eureka registration complete');
            });
            await connectWithDb()
            logger.info(`Database connection established at ${new Date()}`)
            logger.info(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        await handleError(err)
    }
}

start()
