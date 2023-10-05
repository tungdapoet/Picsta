const fs = require("fs")
const logger = require("../core/logger")
const init = async (app) => {
    const rootPath = __dirname;
    let moduleNames = await fs.promises.readdir(rootPath);
    moduleNames = moduleNames.filter(item => item !== 'index.js')
    await Promise.all(
        moduleNames.map(async (moduleName) => {
            const stat = await fs.promises.lstat(`${rootPath}/${moduleName}`)
            if (stat.isDirectory()) {
                const module = require(`./${moduleName}`)
                if (module.init) {
                    await module.init(app)
                    logger.info(`Module ${moduleName} loaded`)
                }
            }
        })
    )
    return app
}

module.exports = {init}
