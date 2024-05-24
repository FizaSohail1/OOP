#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class person{
    private personality:string;
    constructor(){
        this.personality = "Myestery"
    }

public askQuestion(answer:number):void {
    if(answer == 1){
       this.personality = "Extrovert"
    }
    else if(answer == 2){
        this.personality = "Introvert"
    }
    else{
        this.personality
    }
}
public getpersonality():string{
    return this.personality;
}
}
class Student extends person {
    private name: string;
    public Name: string | undefined
    constructor() {
        super() 
        this.name = ""
    }
 public get() {
        return this.name
    }
  public set() {
        this.name = this.Name as string
    }
}


class program {
    static async main():Promise<void>{
    let input = await inquirer.prompt([{
        name:'userAnswer',
        type:'number',
        message:"Type 1 if you want to talk to others or type 2 if you rather to keep to yourself"
    }])
    let userName =await inquirer.prompt([{
        name:'username',
        type:'input',
        message:'Enter your name:'
    }])
    if(input.userAnswer){
        let Person:person = new person
        Person.askQuestion(input.userAnswer)
        let student:Student = new Student
        student.Name = userName.username
        student.set();
        console.log(chalk.yellowBright("Your name is: " + student.get()))
        console.log(chalk.yellowBright("You are: " + Person.getpersonality()))

        }
        else {
            console.log(chalk.red.bold("Please enter number"));
        }
    }

}
program.main()

