export class User {
    public name: string;
    public gender: string;
    public birthYear: number;
    public birthMonth: number;
    public birthDay: number;
    public phone: string;
    public email: string;
    public address: string;
    public description: string;

    constructor(name?, gender?, birthYear?, birthMonth?, birthDay?, phone?, email?, address?, description?) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.birthDay = birthDay;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.description = description;
    }
}