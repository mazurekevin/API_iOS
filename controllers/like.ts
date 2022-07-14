import {Connection} from "mysql2/promise";
import {Chanel} from "../modele/chanel";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Like} from "../modele/like";

export class LikeController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async getLikeByCommentId(id: number): Promise<Like[]|null>{
        try {
            const res = await this.connection.query(`SELECT idLike, idComment, idUser, username FROM tablelike WHERE idComment = ${id}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Like({
                        idLike: row["idLike"],
                        idComment: row["idComment"],
                        idUser: row["idUser"],
                        username: row["username"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }
    async getLikeByUserId(userId: number): Promise<Like[]|null>{
        try {
            const res = await this.connection.query(`SELECT idLike, idComment, idUser, username FROM tablelike WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Like({
                        idLike: row["idLike"],
                        idComment: row["idComment"],
                        idUser: row["idUser"],
                        username: row["username"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }


    public async getAll(): Promise<Like[] | null>{
        try {
            const res = await this.connection.query(`SELECT * FROM tablelike`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Like({
                        idLike: row["idLike"],
                        idComment: row["idComment"],
                        idUser: row["idUser"],
                        username: row["username"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

    async createLike(like: Like):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `tablelike` (idLike,idComment,idUser,username) VALUES (?,?,?,?)",[like.idLike,like.idComment,like.idUser,like.username]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }
    }

    async removeById(idLike: number): Promise<boolean>{
        try{
            const res = await this.connection.execute(`DELETE FROM tablelike WHERE idLike = ${idLike}`)
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }

    }
}
