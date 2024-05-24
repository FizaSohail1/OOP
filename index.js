#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
class person {
    personality;
    constructor() {
        this.personality = "Myestery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality;
        }
    }
    getpersonality() {
        return this.personality;
    }
}
class Student extends person {
    name;
    Name;
    constructor() {
        super();
        this.name = "";
    }
    get() {
        return this.name;
    }
    set() {
        this.name = this.Name;
    }
}
class program {
    static async main() {
        let input = await inquirer.prompt([{
                name: 'userAnswer',
                type: 'number',
                message: "Type 1 if you want to talk to others or type 2 if you rather to keep to yourself"
            }]);
        let userName = await inquirer.prompt([{
                name: 'username',
                type: 'input',
                message: 'Enter your name:'
            }]);
        if (input.userAnswer) {
            let Person = new person;
            Person.askQuestion(input.userAnswer);
            let student = new Student;
            student.Name = userName.username;
            student.set();
            console.log(chalk.yellowBright("Your name is: " + student.get()));
            console.log(chalk.yellowBright("You are: " + Person.getpersonality()));
        }
        else {
            console.log(chalk.red.bold("Please enter number"));
        }
    }
}
program.main();
