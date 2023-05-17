const { orders, verify } = require("../controllers/payment.controller");

const router = require("express").Router()

router.post("/orders", orders);

router.post("/verify", verify)

module.exports = router;