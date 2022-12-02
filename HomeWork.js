//Задание № 4.1
let age = prompt("Enter you age");
age = Number(age);
if (age.isNaN) {
  alert("Not a number")
}
if (age <= 0) {
  alert("You is unbirth")
} else if (age < 18) {
  alert("maloletka")
} else if (age >= 100) {
  alert("You is Дед")
} else {
  console.log(age)
}

//Задание № 4.2
//Я не понял как это сделать
let login = prompt("Login") ;
let message = '' ;
(login == 'Сотрудник') ?
  
(message = 'Привет') :

(login == 'Директор') ?

(message = 'Здравствуйте') :

(login == '') ?
  
(message = 'Нет логина') :

console.log(massage);

//Задание № 4.3
let num = prompt("Enter you age");
age = Number(num);
if (num.isNaN) {
  alert("Not a number")
}
if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0) }
  
//Задание № 4.4
function sum(a, b) {
 return a + b 
} 

//Задание № 4.5
let browser = 4 ;

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome') {
  alert("You've got the Chrome")
} else if (browser === 'Firefox') {
  alert("You've got the Firefox!")
} else if (browser === 'Safari') {
  alert("You've got the Safari")
} else if (browser === 'Opera') {
  alert("You've got the Opera!") 
} else if (browser === '') {
  alert('Okay we support these browsers too') 
} else  {
  alert('We hope that this page looks ok!')
}

//Задание № 4.6
function num(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  } 
}

//Задание № 4.7
function num(a, b) {
  return a - b
}

//Задание № 4.8
function month (a) {
if (0<a<13) {
switch (a) {
case "12" :
alert("Декабрь");
break;
case "01" :
alert("Февраль");
break;
case "02" :
alert("Январь");
break;
case "03" :
alert("Март");
break;
case "04" :
alert("Апрель");
break;
case "05" :
alert("Май");
break;
case "06" :
alert("Июнь");
break;
case "07" :
alert("Июль");
break;
case "08" :
alert("Август");
break;
case "09" :
alert("Сентябрь");
break;
case "10" :
alert("Октябрь");
break;
case "11" :
alert("Ноябрь");
break;
}
} else {
  alert("uncorrect")
}
}

//Задание № 4.9
<body onload="mo()">

function mo () {
let login = prompt("Enter Login");
let password = prompt("Enter Password");
if (login === "admin" && password === "password") {
  alert("Welcome, builder!")
} else {
  alert("You shell not pass!!!")
}
}