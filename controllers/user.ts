import{IUserProps,User} from "../modele";
import {Connection} from "mysql2/promise";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export class UserController{
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async createUser(user: User):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `user` (id,name,mail,password) VALUES (?,?,?,?)",[user.id,user.name,user.mail,user.password]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }
    }


    async getByName(name: string): Promise<User|null>{
        const res = await this.connection.query(`SELECT id, name, mail, password FROM user WHERE name = ?`,[name])
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new User({
                    id: row["id"],
                    name: row["name"],
                    mail: row["mail"],
                    password: row["password"]
                })
            }
        }
        return null;
    }
    async getByMail(mail: string): Promise<User|null>{
        const res = await this.connection.query(`SELECT id, name, mail, password FROM user WHERE mail = ?`,[mail])
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new User({
                    id: row["id"],
                    name: row["name"],
                    mail: row["mail"],
                    password: row["password"]
                })
            }
        }
        return null;
    }

    async getById(id: string): Promise<User|null>{
        const res = await this.connection.query(`SELECT id, name, mail, password FROM user WHERE id = ${escape(id)}`)
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new User({
                    id: row["id"],
                    name: row["name"],
                    mail: row["mail"],
                    password: row["password"]
                })
            }
        }
        return null;
    }


    async removeById(id: string): Promise<boolean>{
        try{
            const res = await this.connection.execute(`DELETE FROM user WHERE id = ${escape(id)}`)
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }

    }
}