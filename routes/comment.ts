import express from "express";
import {DatabaseUtils} from "../database";
import {LikeController} from "../controllers/like";
import routerLike from "./like";
import {CommentController} from "../controllers/comment";


const routerComment = express.Router();

routerComment.get("/getByCommentId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection)
    let id = Number(req.params.id);
    const comment = await commentController.getByCommentId(id)
    if(comment === null){
        res.status(404).end()
    }else{
        res.json(comment)
    }

})

routerComment.get("/getCommentByUserId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection)
    let id = Number(req.params.id);
    const comment = await commentController.getCommentByUserId(id)
    if(comment === null){
        res.status(404).end()
    }else{
        res.json(comment)
    }

})

routerComment.get("/getCommentByChanelId/:id", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection)
    let id = Number(req.params.id);
    const comment = await commentController.getCommentByChanelId(id)
    if(comment === null){
        res.status(404).end()
    }else{
        res.json(comment)
    }

})

routerComment.get("/getAll", async function(req, res, next){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection)
    const comment = await commentController.getAll()
    if(comment === null){
        res.status(404).end()
    }else{
        res.json(comment)
    }

})


routerComment.post("/createComment",async function(req,res,next){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection);
    const success = await commentController.createComment(req.body)
    if(success){
        res.status(200).end()
    }else{
        res.status(404).end()
    }
})

routerComment.delete("/delete/:id",async function(req, res){
    const connection = await DatabaseUtils.getConnection()
    const commentController = new CommentController(connection);
    let id = Number(req.params.id);
    const success = await commentController.removeById(id)
    if(success){
        res.status(204).end()
    }else{
        res.status(404).end()
    }
})


export default routerComment;