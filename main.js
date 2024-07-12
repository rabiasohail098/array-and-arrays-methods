"use strict";
// Array
// narrowing
let arr = ["Arsalan", "Hammad", "Haroon", "Sohail", "Adeel", "Maaz"];
let num = [1, 5, 9, 5, 7, 8];
let bool = [true, false];
// nested array    0         1      0  1     0      1
let mixarray = [["Rabia", "Sohail"], [35, 36], [true, false]];
//    index no 0              1          2
// console.log(mixarray[0][0]);
let candies = [
    { name: "Eclare",
        color: "Brown",
        taste: "Sweet"
    },
    {
        name: "Super Sour",
        color: "Multi",
        taste: "Sour"
    },
    {
        name: "Ice Loly",
        color: "Multi",
        taste: "Sweet and Sour"
    }
];
// console.log(candies[0]);
// multidimensional array
let marks = [
    // class 1 // 0
    [
        [34, 67, 98],
        //   0  1   2
        [14, 63, 57],
        //   0   1  2
        [22, 87, 98] // student 3  index 2
        //    0  1  2
    ],
    // class 2 // 1
    [
        [56, 90, 34],
        //      0  1   2
        [45, 98, 45],
        //   0  1   2
        [24, 76, 45], // student 3 index 2
        //  0  1   2
    ]
];
// console.log(marks[0][1][1]);
// console.log(marks[1][2][2]);
// length
// console.log(fruits.length);
// element count 1
// index count 0
// indexof
// lastindexof
// console.log(fruits.lastIndexOf("Apple",5))
// concat
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let nums = num1.concat(num2);
// console.log(nums);
//join
let fruits = ["Apple", "Mango", "Grapes", "Orange", "Apple", "Banana", "Peach", "Apple"];
let join = fruits.join("🥰");
// console.log(join);
// push add element in the last of the array
let push = fruits.push("Pear", "Lichi", "Cherry");
// console.log(push);
// pop remove element from last of the array
let pop = fruits.pop();
// console.log(pop);
// reverse
// console.log(nums);
let reverse = nums.reverse();
// console.log(reverse);
// alphabets.reverse()
// console.log(alphabets);
// let new1 = alphabets
// console.log(alphabets);
// let reverse1 = new1.reverse()
// console.log(reverse1);
// shift REMOVE ELEMENT FROM START
// console.log(alphabets.shift())
// Unshift add karta hy element start me
let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// console.log(alphabets.unshift("J","K","L","M","N"))
// console.log(alphabets);
// slice
let cut = alphabets.slice(0, 5);
// console.log(cut);
// splice
let removeAdd = alphabets.splice(4, 0, "R");
// console.log(removeAdd);
// console.log(alphabets);
//    0          1          2       3       4         5        6
let friends = ["Arsalan", "Hammad", "Sohail", "Ahmed", "Abdullah", "Humair", "Raza"];
let newFriends = friends.splice(3, 0, "Bilal", "Uzair", "Gohar", "Mohtashim");
// console.log(friends);
// tostring
let sentence = ["I", "am", "a", "good", "girl"];
let sent = sentence.toString();
console.log(sent);
let upper = friends.map((item => item.toUpperCase()));
console.log(upper);
let lower = friends.forEach((item) => {
    console.log(item.toLowerCase());
});
