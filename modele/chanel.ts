export interface IChanelProps{
    idChanel: number;
    chanelName: string;
    Theme : string;
    description: string;
    idUser: number;
    username: string;

}
export class Chanel implements IChanelProps{

    private _idChanel: number;
    private _chanelName: string;
    private _Theme : string;
    private _description: string;
    private _idUser: number;
    private _username: string;

    constructor(props: IChanelProps){
        this._idChanel = props.idChanel
        this._chanelName = props.chanelName
        this._Theme = props.Theme
        this._description = props.description
        this._idUser = props.idUser
        this._username = props.username
    }


    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get idChanel(): number {
        return this._idChanel;
    }

    set idChanel(value: number) {
        this._idChanel = value;
    }

    get chanelName(): string {
        return this._chanelName;
    }

    set chanelName(value: string) {
        this._chanelName = value;
    }

    get Theme(): string {
        return this._Theme;
    }

    set Theme(value: string) {
        this._Theme = value;
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