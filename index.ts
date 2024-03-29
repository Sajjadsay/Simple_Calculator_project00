import inquirer from "inquirer";

let ans = await inquirer.prompt([
    {
        type : "number",
        name : "num1",
        massage :"Enter first number"
    },
    {
        type : "number",
        name : "num2",
        massage :"Enter second number"
    },
    {
        type : "list",
        name : "operator",
        massage :"Enter operator",
        choices : ["+","-","*","/"]
    }

])

let result : number;

if(ans.operator == "+"){
    result = ans.num1 + ans.num2;
    console.log(result);
}
else if(ans.operator == "-"){
    result = ans.num1 - ans.num2;
    console.log(result);
}
else if(ans.operator == "*"){
    result = ans.num1 * ans.num2;
    console.log(result);
}
else {
    result = ans.num1 / ans.num2;
    console.log(result);
}
