export default class UserModel{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password=password
    }

    getUsers(){
        // getting all the users
    }
    
    static addUser(obj){
        const isPresent = recruiters.find((item) => (
            item.email == obj.email ||
            item.id == obj.id
        ))

        if(isPresent){
            return false;
        }
        recruiters.push(obj);
        return true;
    };
    
    static loginUser(obj){
        // confirming user login.
        const userInfo = recruiters.find((item) => (
            item.email == obj.email
        ))
        if(userInfo){
            return userInfo;
        }
        return false;
    }
}

let recruiters = [
    new UserModel(
        1,
        "Dummy user",
        "dummy@dummy.com",
        "dummy56",
    ),
    new UserModel(
        2,
        "Demo user",
        "demo@demo.com",
        "demo56",
    )
];
