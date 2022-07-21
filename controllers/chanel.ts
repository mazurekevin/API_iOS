import {Connection} from "mysql2/promise";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import{Chanel} from "../modele/chanel";
import {User} from "../modele";
import {RequestHandler} from "express";

export class ChanelController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async getChanelById(id: number): Promise<Chanel|null>{
        const res = await this.connection.query(`SELECT idChanel, chanelName, Theme, description, idUser, username FROM chanel WHERE idChanel = ${id}`)
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new Chanel({
                    idChanel: row["idChanel"],
                    chanelName: row["chanelName"],
                    Theme: row["Theme"],
                    description: row["description"],
                    idUser: row["idUser"],
                    username: row["username"]
                })
            }
        }
        return null;
    }
    async getChanelByUserId(userId: number): Promise<Chanel[]|null>{
        try {
            const res = await this.connection.query(`SELECT idChanel, chanelName, Theme, description, idUser, username FROM chanel WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Chanel({
                        idChanel: row["idChanel"],
                        chanelName: row["chanelName"],
                        Theme: row["Theme"],
                        description: row["description"],
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


    public async getAll(): Promise<Chanel[] | null>{
        try {
            const res = await this.connection.query(`SELECT * FROM chanel`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Chanel({
                        idChanel: row["idChanel"],
                        chanelName: row["chanelName"],
                        Theme: row["Theme"],
                        description: row["description"],
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

    async createChanel(chanel: Chanel):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `chanel` (idChanel,chanelName,Theme,description,idUser,username) VALUES (?,?,?,?,?,?)",[chanel.idChanel,chanel.chanelName,chanel.Theme,chanel.description,chanel.idUser,chanel.username]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }
    }

    async removeById(idChanel: number): Promise<boolean>{
        try{
            const res = await this.connection.execute(`DELETE FROM chanel WHERE idChanel = ${idChanel}`)
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }

    }
}