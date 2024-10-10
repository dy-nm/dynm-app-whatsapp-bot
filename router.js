const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");

const router = new Router();

// Tangani semua pesan
router.keyword("*", [BotController, "handleMessage"]);

module.exports = router;