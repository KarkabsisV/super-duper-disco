// alert("Hello!") //my first alert

var b = true;

var str = "Hello Js!"
var str1 = 'Hello Js!2'

function addNumbers(one, two) {
    return one + two;
}

// function showHello() {
//     alert("Hello!!");
// }

// showHello();

// example 
var a = 10;

test();

function test() {
    a = 30;
    var b = 40;
}

var b = 20;

console.log(a, b)


// new example

function showHello() {
    var result = addNumbers (2, 2);
    console.log("The result of add is: " + result)
}

showHello();

//loops

for ( var i = 0; i < 10; i = i + 1 ) {
    console.log("Iteration number:" + i);
}

//if 

var q = 100;
if (q > 5) {
    console.log("q is greater then 5");
}

if (q < 15) {
    console.log("q less then 15");
}

if (q === 10) {
    console.log("q is equel 10");
} else {
    console.log("q is something else");
}

if (q !== 11) {
    console.log("q is not eauel 11");
}

//


var test1 = 1;

// while (test1 < 100) {
//     test1++;
// }
//  console.log("Incremetn 100 times:" + test1)

while (test1 < 100) {
    if (test1 > 50) {
        break
    }
    test1++;
}
console.log("Incremetn 100 times:" + test1)


for (var i = 0; i < 5; i = i + 1) {
    if (i === 2){
        continue
    }
    console.log("Iteration number:" + i)
}

// Arrays

var arr = [];

arr[0] = 5;
arr[1] = 8;
arr[2] = 16;
// var arr = [5, 8, 16];

var tmp = arr[2];
console.log("array element #3: " + tmp);
console.log("arry length is: " +arr.length);
arr.push(20);
console.log(arr);
console.log(arr.pop());
console.log(arr);
//---
arr.unshift(40)
console.log(arr);
console.log(arr.shift());
console.log(arr);
//---
console.log(arr.join(" "));

var myString = "I love JS!";
console.log(myString.split(''));
console.log(myString.split("").sort());
console.log(arr.sort());
console.log(arr.sort(function(a, b){
    return a - b;
}));

for (var i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}

arr.forEach(function(element, index){
    console.log("element " +element + " is at index" + index);
})

// dictionary

var dic = {
    key1: "hello",
    key2: "world",
    key3: "!"

}

console.log(dic['key2']);

for(k in dic){
    console.log(dic[k]);
}

//Objects

function Cat(name){
    this.name = name;
    this.run = function() {
        console.log(this.name + "runs!");
    };
    return this;
}

var murzik = new Cat("Murzik");
var snizok = new Cat("Snizok");

murzik.run();
snizok.run();

// Actions

//helloCont.onclick = showHello;

//helloCont.addEventListener("click", showHello, false);
// helloCont.addEventListener("click", function(e){
//     console.log("hello clicked!")
// }, false);

// helloCont.onclick = showHello;

hello.addEventListener("click", function(e){
    console.log("hello conteiner clicked!")
}, true);

hello.addEventListener("click", function(e){
    console.log("hello clicked!")
    console.log(e);
}, true);
