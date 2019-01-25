const router = require("express").Router();
const toonRoutes = require("./toons");
const userRoutes = require("./toons");

// className routes
router.use("/toons", toonRoutes);
router.use("/users", userRoutes);

module.exports = router;
