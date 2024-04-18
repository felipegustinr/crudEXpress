var express = require("express");
var router = express.Router();
const projectController = require("../controllers").projectController;
router.get('/projectEnable/:id_per_res/:state', projectController.enabledDisabledProjects);
router.get("/", projectController.list);
router.get('/full', projectController.listFull);
router.get('/:id', projectController.getById);
router.get('/fullEnable', projectController.listEnableFull);
router.get('/sql', projectController.getSQL);
router.post('/', projectController.add);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.delete);
module.exports = router;


