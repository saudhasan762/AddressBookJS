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
        return "Contact [ First Name: " +this.firstName+ ", Last Name: " +this.lastName+ ", Address: " +this.address+ ", City: " +this.city+
                ", State: " +this.state+ ", Zip: " +this.zip+ ", Phone Number: " +this.phoneNumber+ ", Email: "+this.email+ " ]\n";
    }
}

//UC 1
let addressBook = new AddressBook("Saud", "Hasan", "Turner", "Dehra", "Uttra", "248002", "917894561260","saud@gmail.com");
console.log("UC1 \n"+addressBook.toString());

//UC 2
try{
    addressBook.firstName = "Saud";
    addressBook.lastName = "Hasan";
    addressBook.address = "Turner";
    addressBook.city = "Dehra";
    addressBook.state = "Uttra";
    addressBook.zip = "248002";
    addressBook.phoneNumber = "918563245986";
    addressBook.email = "saud@gmail.com";
    console.log("UC2 \n"+addressBook.toString())
} catch (e) {
    console.error(e);
}

//UC3
let addressBookArr = new Array();
addressBookArr.push(addressBook);
console.log("UC3 \n"+addressBookArr.toString());

//UC4
const prompt = require('prompt-sync')();
let flag = true;

while(flag == true){
    console.log("Enter Your Choice: \n1.View Contact\n2.Add Contact\n3.Search and Edit Contact\n4.Search and Delete\n5.Number Of Contacts\n6.Search By City Or State\n0.Exit");
    let choice = Number(prompt());
    if(choice == 1){
        viewContacts(addressBookArr);
    } else if(choice == 2){
        addContacts(addressBookArr);
    } else if(choice == 3){
        searchAndEditContact(addressBookArr);
    } else if(choice == 4){
        searchAndDeleteContact(addressBookArr);
    } else if(choice == 5){
        getCount(addressBookArr);
    } else if(choice == 6){
        searchPersonByCityOrState(addressBookArr);
    } else if(choice == 0){
        flag = false; 
    } else console.log("Invalid Choice!!");
}

function viewContacts(addressBookArr){
    try{
        console.log(addressBookArr.toString());
    } catch(e){
        console.error(e);
    }
}

function addContacts(addressBookArr){
    const num = Number(prompt('Enter Number of Contacts to add: '));
    addressBookArr.forEach(entries => {
        for(let i =0;i < num;i++){
            let fname = prompt("Enter First name to check: ");
            if(entries.firstName === fname){
                console.log("Contact with same name Exist!");
            }
            else{
                try{
                    firstName = prompt("Enter First Name: ");
                    lastName = prompt("Enter Last Name: ");
                    address = prompt("Enter Address: ");
                    city = prompt("Enter City: ");
                    state = prompt("Enter State: ");
                    zip = prompt("Enter Zip: ");
                    phoneNumber = prompt("Enter Phone Number: ");
                    email = prompt("Enter Email Address: ");
                    let addressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
                    addressBookArr.push(addressBook);
                    console.log("Contact Added Successfully");
                } catch (e){
                    console.error(e);
                }       
            }
        }
    });
}

function searchAndEditContact(addressBookArr){
    let fname = prompt("Enter First Name to search Contact: ");
    let lname = prompt("Enter Last Name to search Contact: ");
    addressBookArr.forEach(element => {
        try{
            if(element.firstName === fname && element.lastName === lname){
                element.address = prompt("Enter the new Address: ");
                element.city = prompt("Enter the new City: ");
                element.state = prompt("Enter the new State: ");
                element.zip = prompt("Enter the new Zip: ");
                element.phoneNumber = prompt("Enter the new Phone Number: ");
                element.email = prompt("Enter the new Email: ");
                console.log("Contact Edited Successfully");
            } else console.log("Contact Does not Exist.")
        } catch (e) {
            console.error(e);
        }
    });
    console.log("UC4 \n"+addressBookArr.toString());
}

function searchAndDeleteContact(addressBookArr) {
    let fname = prompt("Enter First Name to search Contact: ");
    let lname = prompt("Enter Last Name to search Contact: ");
    addressBookArr.forEach(entries => {
        if(entries.firstName === fname && entries.lastName === lname){
            addressBookArr.pop(entries);
            console.log("UC5 \nContact Deleted Successfully");
        }
    });
}


function getCount(addressBookArr) {
    let count = addressBookArr.length;
    console.log("UC6 \nNumber of Contacts: "+count);
}


function searchPersonByCityOrState(addressBookArr){
    let cityName = prompt("Enter city name to Search: ");
    let stateName = prompt("Enter state name to Search: ")
    addressBookArr.forEach(entries => {
        let newAddressBook = new Array();
        if(entries.city === cityName || entries.state === stateName){
            newAddressBook.push(entries);
            console.log("UC9 \n"+newAddressBook.toString());
        } else{
            console.log("No Such Contact Exist");
        }
        console.log("UC10 \nNumber of Contacts by city or State: "+newAddressBook.length);
    });
}






