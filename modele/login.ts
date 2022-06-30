export class Login {

    private _mail: string;
    private _password: string;

    constructor(mail: string, password: string) {
        this._mail = mail
        this._password = password
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