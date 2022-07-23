export interface IFavoritesProps {
    idFavorite:number;
    idAnime:string;
    idUser: number;

}
export class Favorite implements IFavoritesProps {

    private _idFavorite:number;
    private _idAnime:string;
    private _idUser: number;

    constructor(props: IFavoritesProps) {
        this._idFavorite = props.idFavorite;
        this._idAnime = props.idAnime;
        this._idUser = props.idUser;
    }

    get idFavorite(): number {
        return this._idFavorite;
    }

    set idFavorite(value: number) {
        this._idFavorite = value;
    }

    get idAnime(): string {
        return this._idAnime;
    }

    set idAnime(value: string) {
        this._idAnime = value;
    }

    get idUser(): number {
        return this._idUser;
    }

    set idUser(value: number) {
        this._idUser = value;
    }

}