export interface IFavorisProps{
    idFavoris:number;
    idAnime:string;
    idUser: number;
    animeName: string;

}
export class Favoris implements IFavorisProps {

    private _idFavoris:number;
    private _idAnime:string;
    private _idUser: number;
    private _animeName: string;

    constructor(idFavoris: number, idAnime: string, idUser: number, animeName: string) {
        this._idFavoris = idFavoris;
        this._idAnime = idAnime;
        this._idUser = idUser;
        this._animeName = animeName;
    }

    get idFavoris(): number {
        return this._idFavoris;
    }

    set idFavoris(value: number) {
        this._idFavoris = value;
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

    get animeName(): string {
        return this._animeName;
    }

    set animeName(value: string) {
        this._animeName = value;
    }
}