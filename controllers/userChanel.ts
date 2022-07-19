import {Connection} from "mysql2/promise";
import {User} from "../modele";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {userChanel} from "../modele/userChanel";
import {Chanel} from "../modele/chanel";



export class UserChanelController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async createUserChanel(liaison: userChanel):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `userchanel` (idChanel,idUser) VALUES (?,?)",[liaison.idChanel,liaison.idUser]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err) {
            console.error(err)
            return false
        }
    }

    async getByUserId(userId: number): Promise<userChanel[]|null>{
        try {
            const res = await this.connection.query(`SELECT idChanel,idUser FROM userchanel WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    // @ts-ignore
                    return new userChanel({
                        idChanel: row["idChanel"],
                        idUser: row["idUser"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

    async getByChanelId(idChanel: number): Promise<userChanel[]|null>{
        try {
            const res = await this.connection.query(`SELECT idChanel,idUser FROM userchanel WHERE idChanel = ${idChanel}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    // @ts-ignore
                    return new userChanel({
                        idChanel: row["idChanel"],
                        idUser: row["idUser"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

}