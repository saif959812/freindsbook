export class User {

    public id:number;
    public firstname:string;
    public lastname:string;
    public dob:string;
    public password:string;
public friendSkey:string[];
    public email:string;
    public onlinestatus:string;
    public about:string;
    public imageurl:string;
    public role:string;
    public friends:User[];
    
    constructor(id: number, firstname: string, lastname: string, dob: string, password: string,friendSkey:string[], email: string, about: string, imageurl: string, role: string ,friend:User[]) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.password = password;
        this.friendSkey=friendSkey;
        this.email = email;
        this.about = about;
        this.imageurl = imageurl;
        this.role = role;
        this.friends=friend;
       
    }
}