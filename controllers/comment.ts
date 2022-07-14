import {Connection} from "mysql2/promise";
import{Comment} from "../modele/comment";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {User} from "../modele";

export class CommentController{
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async getByCommentId(id: number): Promise<Comment|null>{
        const res = await this.connection.query(`SELECT idComment, idChanel, idUser, username, content, createDate  FROM comment WHERE idComment = ${id}`)
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new Comment({
                    idComment: row["idComment"],
                    idChanel: row["idChanel"],
                    idUser: row["idUser"],
                    username: row["username"],
                    content: row["content"],
                    createDate: row["createDate"]
                })
            }
        }
        return null;
    }

    async getCommentByChanelId(id: number): Promise<Comment[]|null>{
        try {
            const res = await this.connection.query(`SELECT idComment, idChanel, idUser, username, content, createDate  FROM comment WHERE idChanel = ${id}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Comment({
                        idComment: row["idComment"],
                        idChanel: row["idChanel"],
                        idUser: row["idUser"],
                        username: row["username"],
                        content: row["content"],
                        createDate: row["createDate"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }
    async getCommentByUserId(userId: number): Promise<Comment[]|null>{
        try {
            const res = await this.connection.query(`SELECT idComment, idChanel, idUser, username, content, createDate  FROM comment WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Comment({
                        idComment: row["idComment"],
                        idChanel: row["idChanel"],
                        idUser: row["idUser"],
                        username: row["username"],
                        content: row["content"],
                        createDate: row["createDate"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }


    public async getAll(): Promise<Comment[] | null>{
        try {
            const res = await this.connection.query(`SELECT * FROM comment`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Comment({
                        idComment: row["idComment"],
                        idChanel: row["idChanel"],
                        idUser: row["idUser"],
                        username: row["username"],
                        content: row["content"],
                        createDate: row["createDate"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

    async createComment(comment: Comment):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `comment` (idComment,idChanel,idUser,username,content,createDate) VALUES (?,?,?,?,?,?)",[comment.idComment,comment.idChanel,comment.idUser,comment.username,comment.content,comment.createDate]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }
    }

    async removeById(idComment: number): Promise<boolean>{
        try{
            const res = await this.connection.execute(`DELETE FROM comment WHERE idComment = ${idComment}`)
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }

    }

}