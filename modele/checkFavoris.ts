export class checkFavoris{


    private _idAnime:string;
    private _idUser:number;

    constructor(idAnime: string, idUser: number) {
        this._idAnime = idAnime;
        this._idUser = idUser;
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