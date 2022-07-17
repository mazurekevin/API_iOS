import {Connection} from "mysql2/promise";
import {Chanel} from "../modele/chanel";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Favoris} from "../modele/favoris";
import {checkFavoris} from "../modele/checkFavoris";

export class FavorisController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getFavorisById(id: number): Promise<Favoris|null>{
        const res = await this.connection.query(`SELECT idFavoris, idAnime, idUser, animeName FROM favoris WHERE idFavoris = ${id}`)
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                // @ts-ignore
                return new Favoris({
                    idFavoris: row["idFavoris"],
                    idAnime: row["idAnime"],
                    idUser: row["idUser"],
                    animeName: row["animeName"]
                });
            }
        }
        return null;
    }
    async getfavorisByUserId(userId: number): Promise<Favoris[]|null>{
        try {
            const res = await this.connection.query(`SELECT idFavoris, idAnime, idUser, animeName FROM favoris WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    // @ts-ignore
                    return new Favoris({
                        idFavoris: row["idFavoris"],
                        idAnime: row["idAnime"],
                        idUser: row["idUser"],
                        animeName: row["animeName"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }


    public async getAll(): Promise<Favoris[] | null>{
        try {
            const res = await this.connection.query(`SELECT * FROM favoris`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    // @ts-ignore
                    return new Favoris({
                        idFavoris: row["idFavoris"],
                        idAnime: row["idAnime"],
                        idUser: row["idUser"],
                        animeName: row["animeName"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

    async createFavoris(favoris: Favoris):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `favoris` (idFavoris, idAnime, idUser, animeName) VALUES (?,?,?,?)",[favoris.idFavoris,favoris.idAnime,favoris.idUser,favoris.animeName]);
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