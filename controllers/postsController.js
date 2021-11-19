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

    getPost: async (req, res) => {

        const post = await db.Post.findByPk(req.params.id)

        res.json(post)

    },

    postPost: (req, res) => { },
    editPost: (req, res) => { },
    delete: (req, res) => {



    }


}