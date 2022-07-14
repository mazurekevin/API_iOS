export interface IUserProps{
    id: number;
    name: string;
    mail : string;
    password: string;

}
export class User implements IUserProps{
    private _id: number;
    private _name: string;
    private _mail : string;
    private _password: string;


    constructor(props: IUserProps){
        this._id = props.id
        this._name = props.name
        this._mail = props.mail
        this._password = props.password

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}