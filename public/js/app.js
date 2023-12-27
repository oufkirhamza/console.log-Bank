let bank = {
    name: `jsBank`,
    data: []
}
console.log(bank);
class Person {
    constructor(name, age, email, password, money) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.money = money
    }
    withDraw() {
        let askMoney = parseInt(prompt(`how much money you want`))
        if (askMoney <= this.money) {
            this.money -= askMoney
        } else {
            console.log(`you dont have the full amounth`);
        }
    }
    depositMoney() {
        let askMoney = parseInt( prompt(`how much you want to deposite`))
        if (askMoney <= 1000) {
            this.money += askMoney
        } else {
            console.log(`the max is 1000 dh`);
        }
    }
}
let admin = new Person(`admin`, 43, `admin@gmail.com`, `@dmin123`, 1000)
bank.data.push(admin)

function checkPassWord(params) {
    while (true) {
        let special = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
        let speCharac = special.split("")
        let check = false;
        for (let index = 0; index < speCharac.length; index++) {
            let element = speCharac[index];
            if (params.includes(element)) {
                check = true;
                break
            } else {
                check = false
            }
        }
        if (check == true && params.length > 6 && !params.includes(" ")) {
            break;
        } else {
            alert(`your password must have at least one special character and more than 6 charachters`)
            promptPassword = prompt(`enter your password`)
            params = promptPassword.trim();
        }
    }
}

let ask = prompt(`welcome to js bank ( to Sing up click : a // to Log in click : b // to reset your password click : c )`)
let lowerAsk = ask.toLowerCase()
while (true) {
    if (lowerAsk == `a`) {
        let promptName = prompt(`enter your name`);
        while (true) {
            if (promptName == "") {
                promptName = prompt(`enter your name`);
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
                if ((delSpaces.length > 5) && check === true) {
                    let splitName = delSpaceName.split(" ");
                    for (let index = 0; index < splitName.length; index++) {
                        let element = splitName[index];
                        let clientLower = element.toLowerCase()
                        let client = clientLower.charAt(0).toUpperCase() + clientLower.slice(1);
                        capName.push(client)
                    }
                    break
                } else {
                    alert(`your name must have more than 5 characters and not include any special charachters`)
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

            let promptAge = prompt(`how old are you`)
            while (true) {
                if (!isNaN(promptAge) && promptAge.length < 3 && promptAge.length > 0) {
                    break;
                } else {
                    alert(`enter numbers`)
                    promptAge = prompt(`how old are you`)
                }
            }
            let trimAge = +promptAge.trim()
            console.log(trimAge);

            let promptPassword = prompt(`enter your password`)
            let spacesPass = promptPassword.trim();

            checkPassWord(spacesPass);

            console.log(promptPassword);
            let confirmPass = prompt(`confirme your password`)
            if (confirmPass == promptPassword) {
                console.log(`welcome ${clientName}`);
                let client1 = new Person(clientName, trimAge, promptEmail, promptPassword, 1000);
                bank.data.push(client1);
                break;
            } else {
                alert(`your password is wrong`)
                promptName = prompt(`enter your name`);
            }
        }
        break;
    } else if (lowerAsk == `b`) {
        let i = 0
        while (i < 3) {
            let promptEmail = prompt(`enter your email`);
            for (let index = 0; index < bank.data.length; index++) {
                let element = bank.data[index]
                console.log(element);
                if (element.email == promptEmail) {
                    let promptPassword = prompt(`enter your password`)
                    if (element.password == promptPassword) {
                        console.log(`welcome mr ${element.name} you have ${element.money} dh`);
                        let askUser = prompt(`you want to withdraw money click : w // you want to deposit money : d `);
                        if (askUser == `w`) {
                            element.withDraw()
                            console.log(`your new money is ${element.money}`);
                            break;
                        } else if (askUser == `d`) {
                            element.depositMoney()
                            console.log(bank);
                            break;
                        }
                    } else {
                        console.log(`you password is not correct`);
                    }
                } else {
                    alert(`this email doesn't exist`);
                }
            }
            i++
        }
    } else if (lowerAsk == `c`) {
        let promptEmail = prompt(`enter you email`);
        for (let index = 0; index < bank.data.length; index++) {
            let element = bank.data[index]
            if (element.email == promptEmail) {
                let promptPassword = prompt(`enter your password`)
                let spacesPass = promptPassword.trim();
                checkPassWord(spacesPass);
                element.password = spacesPass
                break;
            } else {
                alert(`this email doesn't exist`);
                ask = prompt(`welcome to js bank ( to Sing up click : a // to Log in click : b // to reset your password click : c )`)
                lowerAsk = ask.toLowerCase()
                continue
            }
        }
        break;
    } else {
        ask = prompt(`welcome to js bank ( to Sing up click : a // to Log in click : b // to reset your password click : c )`)
        lowerAsk = ask.toLowerCase()
    }
}
console.log(bank);