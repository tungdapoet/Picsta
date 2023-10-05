const {NotFound} = require("../common/errors");
const {
    getAll,
    save,
    update,
    getById,
    deleteById
} = require("./repository");


const getByIdHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {_id} = req.params;
        const item = await getById(_id, ModelName);
        if (item) {
            return res.status(200).send(item);
        }
        throw new NotFound(`${ModelName} not found by the id: ${_id}`);
    } catch (error) {
        console.log(error);
        return next(error, req, res);
    }
};

const getAllHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const itemList = await getAll(ModelName)
        if (itemList) {
            return res.status(200).send(itemList)
        }
    } catch (error) {
        return next(error, req, res)
    }
}

const putHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {body} = req;
        await update(body, ModelName);
        return res.status(200).send(body);
    } catch (error) {
        return next(error, req, res);
    }
};

const saveHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {body} = req;
        const item = await save(body, ModelName);
        return res.status(201).send(item);
    } catch (error) {
        return next(error, req, res);
    }
}

const saveAllHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {body} = req;
        await Promise.all(
            body.map(async (item) => {
                await save(item, ModelName);
            })
        )
        return res.status(201).send(body);
    } catch (error) {
        return next(error, req, res);
    }

}

const deleteHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {id} = req.params;
        await deleteById(id, ModelName);
        return res
            .status(200)
            .send({success: true, message: `${ModelName} deleted`});
    } catch (error) {
        return next(error, req, res);
    }
};

const updateHandler = async (req, res, next) => {
    try {
        const ModelName = req.modelName;
        const {body} = req;
        const id = await update(body, ModelName);
        return res.status(200).send(id);
    } catch (error) {
        return next(error, req, res);
    }
};
// export
module.exports = {
    getAllHandler,
    saveHandler,
    putHandler,
    saveAllHandler,
    deleteHandler,
    getByIdHandler,
    updateHandler
};
