class Auth {
    constructor(name){
        this.name = name;
    }
    readAuth(){
        //
    }
    readAll(){
        console.log(this.name);
        this.readAuth();
    }
}

class Client extends Auth {
    readAuth() {
        console.log('Client Auth');
    }
}

class Admin extends Auth {
    readAuth() {
        console.log('Admin Auth');
    }
}

const customer = new Client('Lucy');
const ceo = new Admin('Marvin');
customer.readAll();
ceo.readAll();