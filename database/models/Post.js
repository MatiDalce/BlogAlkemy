
module.exports = function (sequelize, dataTypes) { 

let alias = "Post"

let cols = {

   id :{type: dataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true},
   title:{ type: dataTypes.STRING,
    allowNull: false},
   image:{type: dataTypes.STRING},
   content:{type: dataTypes.STRING},
   category:{type: dataTypes.INTEGER}


}

let config = {tableName: "posts",
timestamps: false}

let Post = sequelize.define(alias, cols ,config);

return Post



}