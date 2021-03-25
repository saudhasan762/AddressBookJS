class AddressBook {

    //constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    //getter and setter method
    get firstName() { return this._firstName}
    set firstName(firstName) { this._firstName = firstName}
    get lastName() { return this._lastName}
    set lastName(lastName) { this._lastName = lastName}
    get address() { return this._address}
    set address(address) { this._address = address}
    get city() {return this._city}
    set city(city) { this._city = city}
    get state() { return this._state}
    set state(state) { this._state = state}
    get zip() { return this._zip}
    set zip(zip) { this._zip = zip}
    get phoneNumber() { return this._phoneNumber}
    set phoneNumber(phoneNumber) { this._phoneNumber = phoneNumber}
    get email() { return this._email}
    set email(email) { this._email = email}

    toString(){
        return "Contact - firstName:" +this.firstName+ ", lastName:" +this.lastName+ " ,address:" +this.address+ " ,city:" +this.city+ " ,"+
                "state:" +this.state+ ", zip:" +this.zip+ " ,phoneNumber:" +this.phoneNumber+ " , email:"+this.email;
    }
}

let addressBook = new AddressBook("Saud", "Hasan", "Turner", "Dehra", "Uttra", "248100", "8754695874","saud@gmail.com");
console.log(addressBook.toString());