export interface IlikeProps{
    idLike: number;
    idComment: number;
    idUser: number;
    username: string;

}
export class Like implements IlikeProps{

    private _idLike: number;
    private _idComment: number;
    private _idUser: number;
    private _username: string;

    constructor(props: IlikeProps){
        this._idLike = props.idLike
        this._idComment = props.idComment
        this._idUser = props.idUser
        this._username = props.username
    }

    get idLike(): number {
        return this._idLike;
    }

    set idLike(value: number) {
        this._idLike = value;
    }

    get idComment(): number {
        return this._idComment;
    }

    set idComment(value: number) {
        this._idComment = value;
    }


    get idUser(): number {
        return this._idUser;
    }

    set idUser(value: number) {
        this._idUser = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}