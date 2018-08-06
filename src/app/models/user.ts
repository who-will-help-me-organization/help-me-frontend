
export class User {
    id?: string;
    email: string;
    code: string;
    name: string;
    password: string;
    courseCode: string;
    phoneNumber?: string;

    constructor(email: string, code: string, name: string,
                password: string, id?: string, phoneNumber?: string) {
        this.email = email;
        this.code = code;
        this.name = name;
        this.password = password;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

}