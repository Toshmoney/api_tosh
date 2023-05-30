const express = require("express");
const {getContact, postContact, getSingleContact} = require("../controller/controller");
const router = express.Router();

router.route("/contact").post(postContact);
router.route("/api/v1/contacts").get(getContact)
router.route("/api/v1/contacts/:id").get(getSingleContact)

module.exports = router;