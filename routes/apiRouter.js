const express = require("express");
const router =  express.Router();
const postsController = require("../controllers/postsController")


router.get("/posts", postsController.getAll)
router.get("/posts/:id", postsController.getOnePost)


router.post("/posts", postsController.postPost) 


router.patch("/posts/:id", postsController.editPost)

router.delete("/posts/:id", postsController.delete)




module.exports = router