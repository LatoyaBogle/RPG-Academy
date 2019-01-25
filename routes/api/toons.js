const router = require("express").Router();
//const toonsController = require("../../controllers/toonsController");
const userController = require("../../controllers/toonsController");


// Matches with "/api/toons"
//Matches with "/api/users"
router.route("/")
 .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/toons/:id"
router
  .route("/:id")
  .get(userController.findById)
.put(userController.update)
  .delete(userController.remove);

  

module.exports = router;
