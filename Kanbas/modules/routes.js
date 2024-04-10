import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

  const findAllModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModules(cid);
    res.json(modules);
  }
  app.get("/api/courses/:cid/modules", findAllModules);

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    newModule.id = Math.random().toString().substr(2, 6);
    delete newModule._id
    const module = await dao.createModule(newModule);
    res.json(module);
  }
  app.post("/api/courses/:cid/modules", createModule);


  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.send(status);
  }
  app.delete("/api/modules/:mid", deleteModule);

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }
  app.put("/api/modules/:mid", updateModule);
}
