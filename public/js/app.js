class Person {
    constructor(name, age, email, password, money) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.money = money
    }
}
let promptName = prompt(`enter your name`);
while (true) {
    if (promptName == "") {
        promptName = prompt(`enter your name`);
    } else {
        break;
    }
}
let delSpaceName = promptName.trim();
let delSpaces = promptName.replace(/\s+/g, "");
let nameLenght = delSpaces.split("");
let capName = [];
let special = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
let speCharac = special.split("")
while (true) {
    let check = true;
    for (let index = 0; index < speCharac.length; index++) {
        let element = speCharac[index];
        if (delSpaces.includes(element)) {
            check = false;
            break;
        } else {
            check = true;
        }
    }
    if ((delSpaces.length > 5) && check === true)  {
        let splitName = delSpaceName.split(" ");
        for (let index = 0; index < splitName.length; index++) {
            let element = splitName[index];
            let clientLower = element.toLowerCase()
            let client = clientLower.charAt(0).toUpperCase() + clientLower.slice(1);
            capName.push(client)
        }
        break
    } else {
        promptName = prompt(`enter your name`);
        delSpaces = promptName.replace(/\s+/g, "");
        delSpaceName = promptName.trim();
    }
}
let clientName = capName.join(" ")
console.log(clientName);

let promptEmail = prompt(`enter your email`);
let lowerEmail = promptEmail.trim().toLowerCase();
let lowerArrEmail = lowerEmail.split("")
while (true) {
    let special = `\`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~`;
    let speCharac = special.split("")
    let checking = true
    for (let index = 0; index < speCharac.length; index++) {
        let element = speCharac[index];
        if (lowerEmail.includes(element) === true) {
            checking = false
        } else {
            checking = true
            break;
        }
    }
    let atSymbol = []
    for (let index = 0; index < lowerArrEmail.length; index++) {
        let element = lowerArrEmail[index];
        if (element == `@`) {
            atSymbol.push(element)
        }
    }
    if (checking === true && lowerArrEmail.includes(`@`) && atSymbol.length == 1 && !lowerArrEmail.includes(" ") && lowerArrEmail.length > 10) {
        break;
    } else {
        alert(`your email must contain more than 10 characters and not include a special character except @ and numbers `)
        promptEmail = prompt(`enter your email`);
        lowerEmail = promptEmail.trim().toLowerCase();
        lowerArrEmail = lowerEmail.split("")
    }
}
console.log(promptEmail);
