//Paragraph 2.14

//Q1
function min(a, b){
    if (a < b){
        return a;
    } else {
        return b;
    }
}

//Q2
function pow(x, n){
    let initial = x;
    for (let i = 1; i < n; i++){
        x *= initial;
    }
    return x;
}

let x = prompt("Please enter X", "");
let n = prompt("Please enter n");
alert(pow(x, n));