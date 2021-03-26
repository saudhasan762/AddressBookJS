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
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'Incorrect First Name';
        }

    get lastName() { return this._lastName}
    set lastName(lastName) { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Incorrect Last Name';
    }

    get address() { return this._address}
    set address(address) { 
        let nameRegex = RegExp('^[A-Z a-z 0-9]{4,}');
        if(nameRegex.test(address))
            this._address = address;
        else throw 'Invalid Address';
    }
    get city() {return this._city}
    set city(city) { 
        let nameRegex = RegExp('^[A-Z a-z 0-9]{4,}');
        if(nameRegex.test(city))
            this._city = city;
        else throw 'Invalid City';    
    }

    get state() { return this._state}
    set state(state) {
        let nameRegex = RegExp('^[A-Z a-z 0-9]{4,}');
        if(nameRegex.test(state))
            this._state = state;
        else throw 'Invalid State';
    }

    get zip() { return this._zip}
    set zip(zip) { 
        let nameRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(nameRegex.test(zip))
            this._zip = zip;
        else throw 'Invalid Zip';
    }

    get phoneNumber() { return this._phoneNumber}
    set phoneNumber(phoneNumber) { 
        let nameRegex = RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
        if(nameRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Invalid Phone Number';
    }

    get email() { return this._email}
    set email(email) {
        let nameRegex = RegExp('^[a-zA-Z0-9]+([_+-.]{0,1})([@]{1})[a-z0-1]+.[a-z]+(.?)([a-z]{2}?)$');
        if(nameRegex.test(email))
            this._email = email;
        else throw 'Email';
    }

    toString(){
        return "Contact - firstName:" +this.firstName+ ", lastName:" +this.lastName+ " ,address:" +this.address+ " ,city:" +this.city+ " ,"+
                "state:" +this.state+ ", zip:" +this.zip+ " ,phoneNumber:" +this.phoneNumber+ " , email:"+this.email;
    }
}

let addressBook = new AddressBook("Saud", "Hasan", "Turner", "Dehra", "Uttra", "248100", "91 8454695878","saud@gmail.com");
try{
    addressBook.firstName = "Chandan";
    addressBook.lastName = "Joshi";
    addressBook.address = "Almora";
    addressBook.city = "Garhwal";
    addressBook.state = "Uttra";
    addressBook.zip = "459620";
    addressBook.phoneNumber = "918562489652";
    addressBook.email = "chandan@gmail.com";
    console.log("Validating: "+addressBook.toString());
} catch (e) {
    console.error(e);
}
let newaddressBook = new AddressBook("Saud", "Hasan", "Turner", "Dehra", "Uttra", "248100", "91 8454695878","saud@gmail.com");
console.log(newaddressBook.toString());

let addressBookArr = new Array();
addressBookArr.push(addressBook);
addressBookArr.push(newaddressBook);
console.log(addressBookArr);





