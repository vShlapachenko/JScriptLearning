//Paragraph 2.10

//Q1

let answer = prompt("Какое официльное название JavaScript")
if (answer === "ECMAScript"){
    alert("Верно!")
} else {
    alert("Не знаете ECMAScript!")
}

//Q2
let num = Number(prompt("Gimme number"));
if (num > 0){
    alert("1");
} else if (num === 0) {
    alert("0");
} else if (num < 0){
    alert(-1);
}

//Q3
let result;
let a = -4;
let b = 5;
result = a + b < 4 ? "small" : "big";
alert(result);

//Q4
let name = prompt("Кто там?")
if (name == "Админ"){
    let password = prompt("Пароль?")
    if (password == "Я главный"){
        alert("Здравствуйте!");
    } else if (password == "" || password == null) {
        alert("отмена");
    } else {
        alert("wrong password");
    }
} else if (name == "" || name == null) {
    alert("otmena");
} else {
    alert("IDK you")
}