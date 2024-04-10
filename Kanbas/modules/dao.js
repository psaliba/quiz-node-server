import model from "./model.js";

// get all modules in a course 
export const findAllModules = (courseId) => {
    return model.find({course: courseId});
}


// create a module in a course
export const createModule = (module) => {
    return model.create(module);
}

// delete a module by id
export const deleteModule = (moduleId) => {
    return model.deleteOne({_id: moduleId})
}

// update a module by id
export const updateModule = (moduleId, module) => {
    return model.updateOne({_id: moduleId}, {$set: module});
}



