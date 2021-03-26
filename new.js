const prompt = require('prompt-sync')();
let flag = true;
var addressBookList = []

while(flag == true){
    const option = Number(prompt("Chosse Your option: \n1.For add new Contact. \n2.Edit Contact Using Name. \nAny Number To Exit" ))
    switch(option){
        case 1:
            addEntries(addressBookList);
            break;
        case 2:
            editEntries(addressBookList);
            break;
        default:
            flag = false;
    }
}