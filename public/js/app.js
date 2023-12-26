class Person {
    constructor(name, age, email, password, money) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.money = money
    }
}
// let promptName = prompt(`enter your name`);
// while (true) {
//     if (promptName == "") {
//         promptName = prompt(`enter your name`);
//     } else {
//         break;
//     }
// }
// let delSpaceName = promptName.trim();
// let delSpaces = promptName.replace(/\s+/g, "");
// let nameLenght = delSpaces.split("");
// let capName = [];
// let special = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
// let speCharac = special.split("")
// while (true) {
//     let check = true;
//     for (let index = 0; index < speCharac.length; index++) {
//         let element = speCharac[index];
//         if (delSpaces.includes(element)) {
//             check = false;
//             break;
//         } else {
//             check = true;
//         }
//     }
//     if ((delSpaces.length > 5) && check === true)  {
//         let splitName = delSpaceName.split(" ");
//         for (let index = 0; index < splitName.length; index++) {
//             let element = splitName[index];
//             let clientLower = element.toLowerCase()
//             let client = clientLower.charAt(0).toUpperCase() + clientLower.slice(1);
//             capName.push(client)
//         }
//         break
//     } else {
//         promptName = prompt(`enter your name`);
//         delSpaces = promptName.replace(/\s+/g, "");
//         delSpaceName = promptName.trim();
//     }
// }
// let clientName = capName.join(" ")
// console.log(clientName);

let promptEmail = prompt(`enter your email`);
let delSpaceEmail = promptEmail.trim();
let lowerEmail = delSpaceEmail.toLowerCase()
let arrLowerEmail = lowerEmail.split("")
console.log(lowerEmail);
let special = `\`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~`;
let speCharac = special.split("")
while (true) {
    let check = true;
    for (let index = 0; index < speCharac.length; index++) {
        let element = speCharac[index];
        if (lowerEmail.includes(element) || lowerEmail.includes(" ") || !lowerEmail.includes("@") || lowerEmail.length<10) {
            check = false;
            alert(`your email must contain @ and not include a special character except @ and numbers and more than 10 characters`)
        } else {
            check = true;
            break
        }
    }
}

