import {Connection} from "mysql2/promise";
import {Chanel} from "../modele/chanel";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Favorite} from "../modele/favorite";
import {checkFavoris} from "../modele/checkFavoris";

export class FavoritesController {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
    async getFavoritesById(id: number): Promise<Favorite|null>{
        const res = await this.connection.query(`SELECT idFavorite, idAnime, idUser FROM favorite WHERE idFavorite = ${id}`)
        const data = res[0];
        if (Array.isArray(data)) {
            const rows = data as RowDataPacket[]
            if (rows.length > 0) {
                const row = rows[0]
                return new Favorite({
                    idFavorite: row["idFavorite"],
                    idAnime: row["idAnime"],
                    idUser: row["idUser"]
                });
            }
        }
        return null;
    }
    async getfavoritesByUserId(userId: number): Promise<Favorite[]|null>{
        try {
            const res = await this.connection.query(`SELECT idFavorite, idAnime, idUser FROM favorite WHERE idUser = ${userId}`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Favorite({
                        idFavorite: row["idFavorite"],
                        idAnime: row["idAnime"],
                        idUser: row["idUser"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }


    public async getAll(): Promise<Favorite[] | null>{
        try {
            const res = await this.connection.query(`SELECT * FROM favorite`);
            const data = res[0];
            if(Array.isArray(data)) {
                return (data as RowDataPacket[]).map(function(row) {
                    return new Favorite({
                        idFavorite: row["idFavorite"],
                        idAnime: row["idAnime"],
                        idUser: row["idUser"]
                    });
                });
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }

    async createFavorite(favoris: Favorite):Promise<boolean>{
        try{
            const res = await this.connection.query("INSERT INTO `favorite` (idFavorite, idAnime, idUser) VALUES (?,?,?)",[favoris.idFavorite,favoris.idAnime,favoris.idUser]);
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }
    }



    async removeById(idFavorite: number): Promise<boolean>{
        try{
            const res = await this.connection.execute(`DELETE FROM favorite WHERE idFavorite = ${idFavorite}`)
            const headers = res[0] as ResultSetHeader
            return headers.affectedRows===1

        }catch(err){
            console.error(err)
            return false
        }

    }
}