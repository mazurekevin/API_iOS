export interface IUserChanelProps{
    idChanel: number;
    idUser: number;

}
export class userChanel implements IUserChanelProps {

    private _idChanel: number;
    private _idUser: number;

    constructor(idChanel: number, idUser: number) {
        this._idChanel = idChanel;
        this._idUser = idUser;
    }


    get idChanel(): number {
        return this._idChanel;
    }

    set idChanel(value: number) {
        this._idChanel = value;
    }

    get idUser(): number {
        return this._idUser;
    }

    set idUser(value: number) {
        this._idUser = value;
    }
}