class Data {
    constructor(type, description){
        this.type = type;
        this.description = description;
    }
    read(){
        console.log(`Type: ${this.type} \nDescription: ${this.description}`);
    }
}

const booksData = new Data('List', 'A list of booking data from a Hotel');
booksData.read();