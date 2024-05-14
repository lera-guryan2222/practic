//№1
//Задание 1
let m="red";
let type = typeof m;
if (type === "number"){
    console.log("Переменная является числом");
}
else if (type === "string"){
    console.log("Переменная является строкой");
}
else if (type === "boolean"){
    console.log("Переменная является булевым значением");
}
else{
    console.log("Другой тип");
}
// //Задание 2
let  zodiak = prompt("Ваш знак зодиака: ");
switch(zodiak.toLowerCase()){
    case"овен":
        alert("Привет, Овен! Наслаждайся этим днем");
            break;
    case"телец":
        alert("Привет, Телец! Сегодня будет замечательный день!");
            break;
    case"стрелец":
        alert("Привет, Стрелец! Ты будешь в шоке от поворотов жизни");
            break;
    default:
        alert("Привет! желаем вам хорошего дня")
}
// //Задание 3
for (let i=1; i<=40; i++){
    console.log(i);
}

let k=1;
while(k<=40){
    console.log(k);
    k++;
}

let n=1;
do{
    console.log(n);
    n++;
}
while (n<=40);

//Задание 4
// while (1)
// {
//     alert('встань вань');
// }

//Задание 5
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "четное");
    } else {
        console.log(i + "нечетное");
    }
}
//задание 5
const number1 = parseFloat(prompt("первое число:"));
const number2 = parseFloat(prompt("второе число:"));
const number3 = parseFloat(prompt("третье число:"));
const numbers = [number1, number2, number3];
numbers.sort((a, b) => a - b); // сортировка
console.log("Числа по возрастанию:", numbers);
//задание 6
let d;
do {
    d = prompt("любое число > 5:");
    if (d > 5) {
        alert("ура!");
        break;
    } 
    else if (d === null) {
        break; 
    } 
    else {
        alert("неверно, начните заново.");
    }
} while(true);
//задание 7
for (let r=8; r<=20; r++){
    if (r%2===0){
        console.log(r);
    }
}
//задание 8
let s=0;
for (let i=0; i<=1000; i++){
    if (s%3===0 || s%5===0){
        s+=i;
    }
    console.log(s);
}
//задание 9
let sum = 0;
const arm = prompt('введите трехзначное число: ');
let temp = arm;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == arm) {
    console.log('is armstrong');
}
else {
    console.log('is not armstrong');
}
//задание 10
let tr;
for (let i = 1; i <= 5; i++){
    tr = " ";
    for (let j = 1; j <= i; j++) {
        tr += "* ";
    }
    console.log(tr);
}
//№2
//задание 1
alert('привет');
//задание 2
function greetUser(){ 
    let name = document.getElementById('username').value; 
    alert('Привет, ' + name + '!'); 
}
//задание 3
const min = (e, f) => e < f ? e : f;
console.log(min(6, 12)); 
//задание 4
function yravnenie(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let x1, x2;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        return [x1];
    } else {
        return "нет корней";
    }
}
let aa = 1;
let bb = -3;
let cc = 2;
let root = yravnenie(aa, bb, cc);
if (typeof root === 'string') {
    console.log(root);
} else {
    console.log("корни: " + root.join(", "));
}
//задание 5
function yravnenie() {
    let aa = prompt("ведите a:");
    let bb = prompt("введите b:");
    let cc = prompt("введите c:");

    if (aa === "" || bb === "" || cc === "") {
        return "введите корректные значения";
  } 
    else if (aa === null || bb === null || cc === null) {
        return "нет решения";
  } 
    else {
        aa = parseFloat(aa);
        bb = parseFloat(bb);
        cc = parseFloat(cc);
    let discriminant = bb * bb - 4 * aa * cc;
    let x1, x2;
    if (discriminant > 0) {
        x1 = (-bb + Math.sqrt(discriminant)) / (2 * aa);
        x2 = (-bb - Math.sqrt(discriminant)) / (2 * aa);
        return "два корня: x1 = " + x1 + ", x2 = " + x2;
    } 
    else if (discriminant === 0) {
        x1 = -bb / (2 * aa);
        return "один корень: x = " + x1;
    } 
    else {
        return "нет корней";
    }
  }
}
// пример использования функции
let roots = yravnenie();
console.log(roots);
//№3
//задание 1
let arr1=[1,3,6,9,2];
let arr2=new Array("2","3","1","8");
const stringArray = ["ab", "bc", "ca"];
//задание 2
let arr3=[3,4,6,1,2,3,9];
console.log(arr3[4]); 
arr3[4] = 7;
console.log(arr3[4]);
//задание 3
let arr4=[1,3,4,7,9,1,4,8];
function lenArr(){
    console.log(arr4.length);
}
document.addEventListener("mouseover", lenArr); //обработчик событий при наведении на любой элемент
//задание 4
let arr5=[1,5,3,2];
console.log(arr5);
let arr6=[];   //с помощью цикла
for (let i=0; i<7; i++){
    arr6.push(i);
}
console.log(arr6);
// задание 5
let arr7=[1,3,6,9,2];
let arr8=[2,9,10,6,4];
let arrays = arr7.concat(arr8);
console.log(arrays);
//задание 6
let arr9=[1,3,6,9,2];
let arr10=[2,9,10,6,4];
let arrayss = arr9.concat(arr10);
let last = arrayss.pop();  //удаляет последний элемент
console.log(last);
//задание 7
let arr11=[1,3,6,9,2];
let arr12=[2,9,10,6,4];
let arrayd = arr11.concat(arr12);
console.log(arrayd);
let start=4;
arrayd.unshift(start);  //добавляет в начало
console.log(arrayd);
//задание 8
let Arr1 = prompt().split(",");
let Arr2 = Arr1.map(function(item) { //создаем новый масссив с результатами операций
    let number = parseFloat(item.trim());  //trim удаляет в начале и в конце строки пробелы
    if (!isNaN(number)) {  //является ли значение числом
        return Math.sqrt(number);
    } else {
        return "Нечисловое значение";
    }
});
console.log(Arr2);
// задание 9
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = day + '.' + month + '.' + year;
console.log("сегодня" + date);
//задание 10
let todayy = new Date();
console.log(today);
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let dayy = todayy.getDate();
let monthh = months[today.getMonth()];
let yearr = todayy.getFullYear();
console.log(dayy,monthh,yearr);
//задание 11
function ymnoz() {
// два случайных числа от 0 до 51 
    let n1 = Math.floor(Math.random() * 51); 
    let n2 = Math.floor(Math.random() * 51); 
    let pr = n1*n2;
    return pr;
}
let rez = ymnoz();
console.log(rez);
//№4
//задание 1
let student = {
    name: "Lera",
    age: 18,
    course: 1,
    university: "SGTU",
};
console.log(student);
function std(name, age, course, university) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.university = university;
    this.greet = function() {
        console.log("привет, меня зовут " + this.name + "мне" + this.age + "лет" + "я учусь на" + this.course + "курсе в" + this.university);
    };
}
//задание 3
function Student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

// Методы, общие для всех студентов
Student.prototype.getInfo = function(){
    return "Студент " + this.name + ", " + this.age + " лет, учится на " + this.course + " курсе.";
};

Student.prototype.changeCourse = function(newCourse){
    this.course = newCourse;
    return this.name + " переведена на " + newCourse + " курс.";
};

// Создание нового студента
let student1 = new Student("Лера", 18, 1);

// Использование методов
console.log(student1.getInfo());
console.log(student1.changeCourse(2));



