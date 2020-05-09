console.log("Hi there, I am the magic ball 8");

var user_qn = prompt("Enter a question and I will answer with yes/no.");
var ans = Math.floor(Math.random() * 4); 


console.log(user_qn);

if (ans >= 2){
    console.log("no, don't do it/you won't")
    console.log('If you want to re-do, you may restart the program')
    console.log('byebye')
    console.log("Magic ball 8 by Joon Hao, built in Visual Studio Code with Javascript")
} else if (ans < 2){
    console.log('Yes, do it!/you will!')
    console.log('If you want to re-do, you may restart the program')
    console.log('byebye')
    console.log("Magic ball 8 by Joon Hao, built in Visual Studio Code with Javascript")
} else {
    console.log("ERROR, pls contact owner for debugging")
}