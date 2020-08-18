//let val;
//
////Number to string
//
//val = String(555);
//val = String(4+4);
//
//
////bool sring
//val = String(true);
//
//
////date to a string
//val = String(new Date());
//
////date to a string
//val = String([1,2,3,4]);
////toString()
//val = (5).toString();
//val = (true).toString();
//
////string to number
//val = Number('5');
//val = Number(true);
//val = Number(false);
//val = Number(null);
//val = Number('hello');
//val = Number([1,2,3]);
//val = parseInt('100.30');
//val = parseFloat('100.30');
//
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//console.log(val.toFixed(2));
/////type coercion
//const val1 = 5;
//const val2 = 6;
//const sum = val1 + val2;
//console.log(sum);
//console.log(typeof sum);


//numbers and the math object

//const num1 = 100;
//const num2 = 60;
////simple math with numbers
//val = num1 + num2;
//val = num1 * num2;
//val = num1 - num2;
//val = num1 / num2;
//val = num1 % num2;
////math object
//val = Math.PI;
//val = Math.E;
//val = Math.round(2.4);
//val = Math.ceil(2.4);
//val = Math.floor(2.8);
//val = Math.sqrt(64);
//val = Math.abs(-3);
//val = Math.pow(8, 2);
//val = Math.min(2,33,4,1,55,6,3,-2);
//val = Math.max(2,33,4,1,55,6,3,-2);
//val = Math.random();
//val = Math.floor(Math.random() * 20 + 1);
//
//
//
//
//
//
//console.log(val);


////string method and concatanation
//
//const firstName = 'william';
//const lastName = 'johnson';
//const age = 36;
//const str = 'hello there my name is brad';
//const tags = 'web design,web development,programming';
//
//let val;
//
////concatenation
//
//val = firstName + ' ' + lastName;
//
////Append
//val = 'Brad';
//val += 'Traversy';
//
//val = 'hello, my name is ' + firstName + 'and i am ' + age;
//
////Escaping for quotes 
//
//val = 'that\'s awesome, I can\'t wait';
//
////Length
//val = firstName.length;
//
////concat 
//val = firstName.concat(' ', lastName);
////change case
//val = firstName.toUpperCase();
//val = firstName.toLocaleLowerCase();
////indexOf()
//val = firstName[2];
//val = firstName.indexOf('l');
//
////charAt()
//val = firstName.charAt('2');
////last char
//val = firstName.charAt(firstName.length - 1);
////substring()
//val = firstName.substring(0, 4);
////slice()
//val = firstName.slice(0, 4);
//val = firstName.slice(-3);
////split
//val = str.split(' ');
//val = tags.split(',');
////replace
//val = str.replace('brad', 'jack');
////includes
//val = str.includes('foo');
//
//console.log(val);

////Template Literals
//const myName = 'john';
//const myAge = 30;
//const myJob = 'Web Developer';
//const myCity = 'Miami';
//let html;
////without template strings (es5)
//html = '<ul><li>Name: ' + myName + ' </li><li>Age: ' + myAge + '</li><li>Job: ' + myJob + '</li><li>city: ' + myCity + '</li></ul>';
//
//
////with template string/template literals
//html = `
//   
//<ul>
//       <li>name:${myName}</li>
//       <li>age:${myAge}</li>
//       <li>job:${myJob}</li>
//       <li>city:${myCity}</li>
//       <li>${2 + 2}</li>
//   </ul>
//
//
//
//
//
//`;
//
//html = 
//document.body.innerHTML = html;

//Array & array methods

//const numbers = [43, 46, 33, 44, 36, 5];
//const numbers2 = new Array(43,46,33,44,36,5);
//const fruits = ['Apple','Banana','Orange','Pear'];
//const mixed = [22,'hello', true, undefined, null, {a:1, b:1}, new Date()];

//let val;
//
////Get Array length
//val = numbers.length;
// 
//
////check if is array
//val = Array.isArray(numbers);
//
////Get single value
//val = numbers[3];
//val = numbers[0];
//
////Insert into array 
//numbers[2] = 100;
//
////find the index of value
//val = numbers.indexOf(36);

////MUTATING ARRAYS
//
////add on the end
//numbers.push(250);
//
////add on the front of an array
//numbers.unshift(120);
//
////take of from the end
//numbers.pop();
//
////take of from the front of an array
//numbers.shift();
//
////splice array values
//numbers.splice(1,3);
//
////reverse array values
//numbers.reverse();

//concat array values
//val = numbers.concat(numbers2);
//
////Sorting array values
//val = fruits.sort();
//val = numbers.sort();
//
////ust the compare function
//val = numbers.sort(function(a, b){
//   return a - b; 
//});
//
//
////Reverse Sort
//val = numbers.sort(function(a, b){
//   return b - a; 
//});

//find
//function under50(num)
//{
//    return num < 50;
//}
//
//val = numbers.find(under50);
//
//console.log(numbers);
//console.log(val);

//const person = {
//    firstName:'steve',
//    lastName:'smith',
//    age:35,
//    email:'steve@aol.com',
//    hobbies:['mma', 'reading'],
//    address:{
//        city:'Miami',
//        state:'FL'
//    },
//    getBirthYear:function(){
//        return 2020 - this.age;
//    }
//}
//
//let val;
//
//val = person;
//
////get specific value 
//val = person.firstName;
//val = person['lastName'];
//val = person.age;
//val = person.hobbies[1];
//val = person.address.state;
//val = person.address['city'];
//val = person.getBirthYear();
//console.log(val);
//
//const people = 
//      [
//          {name:'john', age:30},
//          {name:'mike', age:23},
//          {name:'nancy', age:29}
//      ];
//for(i = 0; i <people.length; i++){
//    console.log(people[i].name);
//}



//Dates and Times
//let val;
//
//const today = new Date();
//let birthday = new Date('04-30-1985');
//
//val = today.getMonth();
//val = today.getDate();
//val = today.getDay();
//val = today.getFullYear();
//val = today.getHours();
//val = today.getMinutes();
//val = today.getSeconds();
//val = today.getMilliseconds();
//val = today.getTime();
//
//birthday.setMonth(2);
//birthday.setDate(12);
//birthday.setFullYear(1985);
//birthday.setHours(3);
//birthday.setMinutes(30);
//birthday.setSeconds(25);
//
//console.log(birthday);



//if statements and comparison operators

//const id = 100;
//////equal to 
////if (id == 100){
////    console.log('correct');
////    
////}else{
////    console.log('incoorect');
////}
////
//////not equals to
////
////if (id != 101){
////    console.log('correct');
////    
////}else{
////    console.log('incoorect');
////}
////
////
//////equal to value type
////if (id === 100){
////    console.log('correct');
////    
////}else{
////    console.log('incoorect');
////}
////
//////not equal to value type
////if (id !== 100){
////    console.log('correct');
////    
////}else{
////    console.log('incoorect');
////}
//
////if(typeof id !== 'undefined'){
////    console.log(`The id is ${id}`);
////}else
////    {
////        console.log('no ID');
////    }
//
////greater than or less than 
//
//
////if (id > 200){
////    console.log('correct');
////    
////}else{
////    console.log('incorrect');
////}
////if (id <= 400){
////    console.log('correct');
////    
////}else{
////    console.log('incorrect');
////}
//
//
////IF ELSE
////const color = 'red';
//
//
////if(color === 'red'){
////    console.log('color is red');
////}
////else if(color === 'blue'){
////    console.log('color is blue');
////
////}
////else{
////    console.log('color is not red or  blue');
////
////}
//
////logical operator
////const name = 'steve';
////const age = 20;
////
//////AND &&
////if (age > 0 && age < 12){
////    console.log(`${name} is a child`);
////}
////
////else if (age > 13 && age < 110){
////    console.log(`${name} is a teenager`);
////}else {
////    console.log(`${name} is an adult`);
////}
////
////// OR ||
////
////if (age > 0 && age < 12){
////    console.log(`${name} is a child`);
////}
////
////else if (age < 16 && age > 65){
////    console.log(`${name} can't run in the race`);
////}else {
////    console.log(`${name} is registerd in the race`);
////}
////
////
//////TERNARY OPERATOR
////console.log(id === 100 ? 'correct' : 'INCORRECT');
////
////
//////WITHOUT BRACES
////if(id === 100)
////    console.log('correct');
////
////else{
////    console.log('incorrect');
////}


////switches 
//
//const color = 'red';
//
//switch(color){
//    case'red':
//        console.log('color is red');
//        break;
//        
//        case'red':
//        console.log('color is blue');
//        break;
//        
//    default:
//        console.log('color is not red or blue');
//        break;
//}
//
//
//let day;
//
//switch(new Date().getDay()){
//      case 0:
//        day = 'sunday';
//        break;
//        
//        case 1:
//        day = 'monday';
//        break;
//        
//      case 2:
//        day = 'tuesday';
//        break;
//        
//     case 3:
//        day = 'wednesday';
//        break;
//        
//     case 4:
//        day = 'thursday';
//        break;
//        
//     case 5:
//        day = 'friday';
//        break;
//        
//     case 6:
//        day = 'saturday';
//        break;
//        
//      
//}
//
//console.log(`today is ${day}`);


//FUnction DECLARATION
//function greet(firstName, lastName)
//{
//    if(typeof firstName === 'undefined'){ firstName = 'john'}
//    if(typeof firstName === 'undefined'){ lastName = 'doe'}
//    //console.log('hello');
// return 'hello ' + firstName + ' ' + lastName;
//}
//
//console.log(greet('steve', 'smithy'));

//function expressions

//const square = function(x){
//    return x*x;
//}
//
//console.log(square(3));

//IMMEDIATLEY INVOKABLE FUNCTION EXPRESSION

//(function(){
//    console.log('run iife..');
//})();

//(function(name){
//    console.log('run iife..' + name);
//})('brad');

//PROPERTY METHODS

//const todo = {
//    add:function(){
//        console.log('add to do');
//    },
//    edit:function(id){
//        console.log(`edit todo ${id}`);
//    }
//}
//
//todo.add();
//todo.edit(22);


//FOR LOOP 
//for(let i = 0; i <= 10; i++){
//    console.log('number ' + i);
//    if(i === 2){
//        console.log('2 is my favorite number');
//        continue;
//    
//    }
//    
//     if(i === 5){
//        console.log('2 is my favorite number');
//        break;
//    
//    }
//    console.log('number ' + i)
//}
    

//WHILE LOOP 
//let i = 0; 
//
//while(i < 10){
//  console.log('number ' + i);
//  i++;
//}






//DO WHILE 

//let i = 0;
//do{
//  console.log('number' + i);
//  i++;
//}
//
//while(i < 10);


//LOOP THROUGH ARRAY
//const cars = ['Ford','Chevy','Honda','Toyota'];

//for (i = 0; i < cars.length; i++)
//    {
//        console.log(cars[i]);
//    }


//cars.forEach(function(car){
//    console.log(car);
//})

//cars.forEach(function(car, index, array){
//    console.log(`${index} : ${car}`);
//    console.log(array);
//});


//MAP 
//const users = [
//    {id: 1, name:'john'},
//    {id: 2, name:'sara'},
//    {id: 3, name:'karen'},
//    {id: 4, name:'steve'}
//];
//
//const ids = users.map(function(user){
//    return user.id;
//})
//
//console.log(ids);

//FOR IN LOOP
//const users = {
//    firsName:'john',
//    latName:'doe',
//    age:40
//    
//}
//
//
//for (let x in users){
//    console.log(' ${x} : ${users[x]} ');
//}

//WINDOW METHODS / OBJECTS / PROPERTIES

//alert

//alert('hellow world');

//prompt

//const input = prompt();
//alert(input);

//confirm
//if (confirm('are you sure')){
//    console.log('YES');
//}
//else{
//    console.log('no')
//}


//let val;
//
////outer height and width
//val = window.outerHeight;
//val = window.outerWidth;
//
////innerwidth and width
//val = window.innerHeight;
//val = window.innerWidth;
//
//
////scroll bars
//val = window.scrollY;
//val = window.scrollX;
//
////LOCATION OBJECT
//val = window.location;
//val = window.location.hostname;
//val = window.location.port;
//val = window.location.href;
//val = window.location.search;
//
//////REDIRECT
////window.location.href = 'http://google.com';
//////RELOAD
////window.location.reload();
//////
//
//
//////HISTORY OBJECT
////window.history.go(-2);
////val = window.history.length;
//
////Navigator Object
//val = window.navigator;
//val = window.navigator.appName;
//val = window.navigator.appVersion;
//val = window.navigator.userAgent;
//val = window.navigator.platform;
//val = window.navigator.vendor;
//val = window.navigator.language;
//console.log(val);

//SCOPE
//var a = 1;
//let b = 2;
//const c = 3;
//
//console.log('global scope ', a, b, c);