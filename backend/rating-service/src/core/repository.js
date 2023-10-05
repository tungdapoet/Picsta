const mongoose = require("mongoose");

const save = async (item, modelName) => {
    const model = new mongoose.models[modelName](item);
    return await model.save();
};

const update = async (item, modelName) => {
    return await mongoose.models[modelName].findOneAndUpdate(
        {_id: item._id},
        item
    );
};

const getAll = async (modelName) => {
    return await mongoose.models[modelName].find();
};

const getByName = async (name, modelName) => {
    return await mongoose.models[modelName].find({name: name})
};

const getById = async (id, modelName) => {
    const model = await mongoose.models[modelName].findById(id);
    if (model == null) {
        throw new Error(`${modelName} not found by the id: ${id}`);
    }
    return model;
};

const deleteById = async (id, modelName) => {
    const model = await mongoose.models[modelName].findById(id);
    if (model) {
        // eventEmitter.emit(`${modelName}Deleted`, model);
        return await mongoose.models[modelName].deleteOne({_id: id});
    }
    throw new Error(`Product not found by the id: ${id}`);
};

const searchOne = async (query, modelName) => {
    return await mongoose.models[modelName].findOne(query).lean().exec();
};

const dynamicSearch = async (query, modelName) => {
    return await mongoose.models[modelName].find(query).lean().exec();
};

module.exports = {
    getAll,
    save,
    update,
    getByName,
    getById,
    deleteById,
    searchOne,
    dynamicSearch
};
