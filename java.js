//Question 1
var arr = [[1,2,3],[4,5,6],7,8,9,[[10,11,12,[13,4,112]],136,14],];
console.log(arr[5][0][0],arr[3],arr[5][0][3][0],arr[5][1],arr[1][0],arr[5][0][3][1]);
//Question 2
var sentence = ["javascript","web","Capacity Bay"];
var output = `I am a ${sentence[1]} developer at ${sentence[2]} and I love ${sentence[0]}.`;
console.log(output);
//Question 3
var word = "Generalization";
console.log(word.slice(3));
//Question 4
var fruit = ["orange","apple","guava","lemon"];
fruit.unshift("pea","banana");
fruit.push("avocado","mango");
console.log(fruit);



//Section Two
// var num = prompt('Enter a number')
// var msg = document.getElementById("msg")
function fizzBuzz(num){
    for (let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0){
            console.log("fizz");
        }
        else if (i % 5 === 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz(40);

