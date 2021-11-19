const db = require("../database/models")


module.exports = {

    getAll: async (req, res) => {

        const postss = await db.Post.findAll();

        const post = []

        postss.forEach(element => {

            post.push({
                id: element.id,
                name: element.name,
                title: element.title,
                image: element.image,
                category: element.category,
                content: element.content,
                detail: "http://localhost:3000/api/posts/"+element.id
            })

        });

        const data = {count: post.length,
                      posts: post}
        res.json(data)
    },

    getOnePost: async (req, res) => {
        

        const onePost = await db.Post.findByPk(req.params.id)

        if(!onePost) { res.send("No hay posteos")}

        console.log(onePost)

        res.json(onePost)

    },

    postPost:  async(req, res) => {

        await db.Post.Create(  
          {  
            name: req.body.name,
            title: req.body.title,
            image: req.body.image,
            category: req.body.category,
            content: req.body.content,

          }


        )

        

          



     },
    editPost: (req, res) => { },
    delete:async (req, res) => {

        await db.Post.destroy({
            where:{
                id:req.params.id
            }
           })



    }


}