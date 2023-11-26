const router = require("express").Router();
const user = require("./users");
const report = require("./report");
const post = require("./post");
const comment = require("./comment");
const reply = require("./reply");
router.use("/user", user);
router.use("/report", report);
router.use("/post", post);
router.use("/comment", comment);
router.use("/reply", reply);

module.exports = router;
