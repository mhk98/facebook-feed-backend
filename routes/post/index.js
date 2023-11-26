const router = require("express").Router();
const post = require("../../controllers/post/post.controller");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.get("/",  post.getAllpost);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-post", upload,  post.createpost);
router.delete("/:id", post.deletepost);
router.put("/:id", post.updatepost);

module.exports = router;
