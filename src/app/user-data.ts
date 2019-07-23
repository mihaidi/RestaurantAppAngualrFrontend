import { PhotoData } from './photo-data';
export class UserData {
    id: number;
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: Number;
    roles: String[];
    photoData:PhotoData[];

    constructor(username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number,
        roles: String[],
        id: number,
        photoData:PhotoData[]) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.id = id;
        this.photoData = photoData;
    }
}
