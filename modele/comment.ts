export interface ICommentProps{
    idComment: number;
    idChanel: number;
    idUser: number;
    username: string;
    content: string;
    createDate: string;

}
export class Comment implements ICommentProps {

    private _idComment: number;
    private _idChanel: number;
    private _idUser: number;
    private _username: string;
    private _content: string;
    private _createDate: string;

    constructor(props: ICommentProps) {
        this._idComment = props.idComment
        this._idChanel = props.idChanel
        this._idUser = props.idUser
        this._username = props.username
        this._content = props.content
        this._createDate = props.createDate;
    }

    get idComment(): number {
        return this._idComment;
    }

    set idComment(value: number) {
        this._idComment = value;
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

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get createDate(): string {
        return this._createDate;
    }

    set createDate(value: string) {
        this._createDate = value;
    }

}