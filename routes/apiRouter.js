const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController")
const upload = require("../middleware/multer")


router.get("/posts", postsController.getAll)
router.get("/posts/:id", postsController.getOnePost)


router.post("/posts", upload.single("image"),postsController.postPost)


router.patch("/posts/:id", upload.single("image") ,postsController.editPost)

router.delete("/posts/:id", postsController.delete)




module.exports = router