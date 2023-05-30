const express = require("express");
const {getContact, postContact} = require("../controller/controller");
const router = express.Router();

router.route("/contact").post(postContact);
router.route("/api/v1/contacts").get(getContact)

module.exports = router;