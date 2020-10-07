// alert("Hello!");

var test1 = 10;

var z = true;

var str = "Hello Js!!!";
var str1 = 'Hello #2';

function addNumbers(one, two){
    return one + two;
}

/*function showHello() {
    alert("Hello!");
}

showHello();*/

function showHello() {
    var result = addNumbers(2, 2);
    alert("The result of add is: " + result);
}

showHello();

// cool example

var a = 10;

test();

function test() {
    a = 30;
    var b = 40;
}

var b = 20;

console.log(a, b);

//control flow

var q = 10;
if (q > 5) {
    console.log("q is grearer then 5");
}
if (q < 15) {
    console.log("q is less then 15");
}
if (q === 10) {
    console.log("q is equal 10");
} else {
    console.log("q is something else");//2
}
if (q !== 11) {
    console.log("q is not equal 11");
}//1

//loops

// for (var i = 0; i < 5; i = i + 1) {
//     console.log("Iteration numbey: " + i);
    
// }


// while (test1 < 100) {
//     test1++;
// }
// console.log("Increment 100 times: " + test1);

while (test1 < 100) {
    if (test1 > 50) {
        break
    }
    test1++;
}
console.log("Increment 100 times: " + test1);

for (var i = 0; i < 5; i = i + 1) {
    if (i === 2){
        continue
    }
    console.log("Iteration numbey: " + i);
    
}