import {Connection} from "mysql2/promise";
import {User} from "../modele";
import {RowDataPacket} from "mysql2";
import {Login} from "../modele/login";

export class LoginController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getByMail(login:Login): Promise<User|null>{
        const res = await this.connection.query(`SELECT id, name, mail, password FROM user WHERE mail = ?`,[login.mail])
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
}