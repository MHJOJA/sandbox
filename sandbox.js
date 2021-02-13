//template strings

const tittle = 'The reads of 2019';
const author = 'Mario';
const likes = '25';

//concatination

let results = 'The blog '+tittle + 'by  '+ author + 'has a total of '+ likes + ' likes.'
console.log(results);

// tempate string way

let string = `The blog ${tittle} by ${author} has a total of ${likes} likes.`;
console.log(results);

//Arrays

let ninjas  = ['shaun', 'ryu', 'zorro'];
console.log(ninjas);

let ages = [20,68,45,33];

console.log(ages[2]);

let add = ninjas.push('ken')
// console.log(ninjas);

results = ninjas.pop('ken');
console.log(results);

//boolean comparision

console.log(true,false, 'true','false');

//method can return boolean

let email = 'lukhanyo@netninja.co.uk'
let method = email.includes('@')
// console.log(results);
let names = ['Smith', 'Ryu','Sipho']
let methods = names.includes('Ryu');
console.log(methods);

//comparation operator

let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age >20);
console.log(age <=20)

let name = 'Shaun';
console.log(name == 'Shaun');
console.log(name > 'Crystal');

//strict comparsion

console.log(age ===35);
console.log(age!==25);
console.log(age ==='25');

//loose comparision

console.log(age == 25);
console.log(age == '25');
console.log(age!=25);

//for loop

for(let i =0; i<5;i++){
    console.log('in loop:',i);
}
console.log('finish loop');

const user = ['Sipho, Sizwe,Sam'];
for(let i = 0;i < user.length;i++){
    console.log(user[i]);
}

//while loop
 
const players = ['Shaun','Susan','Jack'];
let i = 0;
while(i < players.length){
    console.log(players[i])
    i++
}

//do while loop

// let i =5;
// do{
//     console.log('val of i is :',i);
//     i++;

// }while(i<5);


//if statements
const years = 25;

if(years >20){
    console.log('you are older than 20 years ');
}

const ninjars = ['Ryu','Ken','Bison','Chun-li'];

if(ninjars.length > 3){
    console.log("That's a lot of ninjas");
}

var password = 'password';
if(password.length >= 8){
    console.log('you have a strong password!');
}

var password = 'pass ';
if(password.length >=12){
    console.log('this is a mighty strong password');
}
else if(password.length >= 8){
    console.log('this is a long passsword');
}
else{
    console.log('this is not long enough');
}

//logical operators OR || and AND &&

var password = 'p@ssword';
if(password >= 12 && password.includes('@')){
    console.log('password is mighty strong');
}
else if(password >= 8 || password.includes('@') && password.length > 5){
    console.log('this is a strong password');
}
else{
    console.log('this is not a strong password');
}

//logical not !

let users = false;

if(!users){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

//break and continue

let scores = [10,50,0,100,60,40,80];

for(let i =0; i<scores.length;i++){
    console.log(scores[i]);

    if(scores[i] ===0){
        console.log('your score:',scores[i]);
    }

    if(scores[i] ===100){
        console.log('congrads you have the highest score');
        break;
    }
}

//switch statements 

let grade = '7';

switch(grade){

    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B');
        break;
    case 'C':
        console.log('you got a C');
        break;
    case 'D':
        console.log('you got a D');
        break;
        default :
        console.log('not a valid grade');
}

//variables and block scope

var year = 30;

if(true){
    let year = 45;
    let name = 'Shaun';
    console.log('inside 1st code block',year,name);
    if(true){
        let age = 50;
        console.log('inside 2nd code block',year,name);
    }
}
console.log('outside code block',age,name);

//function declairation

function greet(){
    console.log('Hello there!!');
}
greet();
greet();

// function expression

var speak = function(){
    console.log('Good day fellas');
}
speak();

//arguements and parameterts

let say = function(name){
    console.log(`Good mornign ${name}`);
}
say('Mario');


const state = function(name,time){
    console.log(`Good ${time} ${name}`)
}
state('Shaun','morning');

//returning values

const calcArea = function(radius){
    return 3.14*radius**2;
}
let area = calcArea(5);
console.log(area)

// arrow functions

let greeting = ()=>{
    console.log('Hello world');
}
const returns = greeting();


const bill = (products,tax)=>{
    let total = 0;
    for(let i=0;i<total.length;i++){
        total += products[i]+products[i]*tax;
    }return total;
}
console.log(bill([10,15,30],0.2));

//functions


const greetings =()=>'hello'
let resultOne = greetings();
console.log(resultOne);

//callbacks and foreach

const myFun =(callbackFun)=>{
    //do this
    let value = 50;
    callbackFun(value);}
    myFun(value =>{
        //do this
        console.log(value);
        })

let people = [ 'Shaun','Ryu','Bob','Steve','Nicki']

people.forEach((person ,index)=>{
    console.log(index,person);
})

let artists = ['Zola','Sbu','Zahara','Adele'];
const artistLog = (artist,index)=>{
    console.log(`${index}- hello ${artist}`);
}
artists.forEach(artistLog);

//get a refference to the ul

const ul = document.querySelector('.people');

let peoples = ['Susan','Steve','Odwa','Kane'];
let html = ``;

peoples.forEach(person=>{

    // create html tamplate

    html += `<li style"color: purple>${person}</li>`
});
console.log(html);
// ul.innerHTML = html;

//object literals

let blogs = [
    {tittle: 'An apple doesnt fall far from a tree',likes:30},
    {tittle:'five steps of breathing', likes:58}
]
console.log(blogs);

let userInfo = {
    name: 'Crystal',
    age:35,
    gender: 'female',
    email: 'crystal@ziyawa.co.za',
    location: 'Thokoza',
    blogs:[{tittle: 'An apple doesnt fall far from a tree',likes:30},
    {tittle:'five steps of breathing', likes:58}],
    login : function(){
        console.log('the user have logged in');
    },
    logout:function(){
        console.log('you have llogged out!');
    },
    logBlog: function(){
        console.log('this user has the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog.tittle,blog.likes);
        })
    }

}
userInfo.logBlog();
userInfo.login();
userInfo.logout();




console.log(user);
console.log(user.gender);

user.age = 40;
console.log(user.age);

console.log(user['email']);

user['location'] = 'Thembisa';
console.log(user['location']);
console.log(typeof user);

//Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

let areaC = 7.5
console.log(Math.round(areaC));
console.log(Math.floor(areaC));
console.log(Math.ceil(areaC));
console.log(Math.trunc(areaC));

//random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random*50));

//primitive values

let scoreOne = 50;
const scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo:${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`)

//reference values

const userOne = {name:'Sipho',age:40};
const userTwo = userOne;
console.log(userOne,userTwo);
userOne.age = 35;
userOne.name = 'Shaun'
 
console.log(userOne,userTwo);

//Document Objet Model

const para = document.querySelector('p');
console.log(para);

let par = document.querySelector('div.error')
console.log(par);

let  paras = document.querySelectorAll('p');
console.log(paras);
paras.forEach(para=>{
    console.log(paras);
});

//get element by Id

const tittles = document.getElementById('page-tittle');
console.log(tittles);

//get element by their className

let error = document.getElementsByClassName('error');
console.log(error);

//gett element by their tag name

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1]);

let paraM = document.querySelector('p');
console.log(paraM.innerText);

paraM.innerText = 'Hello World!!'
console.log(paraM.innerText);

let parag = document.querySelectorAll('p');
parag.forEach(para=>{
    console.log(para.innerText);
});

const content = document.querySelector('.content');
console.log(content);

const peopl = ['Sizwe']

const   link = document.querySelector('a');
console.log(link);
link.setAttribute('href','https://thenetninja.co.uk');;
link.innerText = 'the net ninja website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:green');

const title = document.querySelector('h1');
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';


const params = document.querySelectorAll('p');

params.forEach(p =>{
if(p.textContent.includes('error')){
    p.classList.add('error');
}
if(p.innerText.includes('success')){
    p.classList.add('success');
}
})