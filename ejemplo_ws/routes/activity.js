var express = require("express");
var router = express.Router();
const activitytController = require("../controllers").activitytController;
router.get("/", activitytController.list);
router.get('/:id', activitytController.getById);
router.post('/', activitytController.add);
router.put('/:id', activitytController.update);
router.delete('/:id', activitytController.delete);
module.exports = router;
