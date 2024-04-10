import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ModulesSchema", schema);
export default model;