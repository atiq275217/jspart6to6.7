// Start part 6. = Arrays

var fruits = ["apple","banana","orange","plum"];
console.log(fruits);

console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];
console.log(fruits[0]); // add [0]
//Break
console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];
console.log(fruits[2]); // add [2]

console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];
console.log(fruits[4]); // add [4]
//Break
console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];
console.log(fruits[4]);

fruits[4] = "grape"; // add grape

console.log(fruits[4]);
//Break
console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];
console.log(fruits[4]);

fruits[4] = "grape";

console.log(fruits[4]);

console.log(fruits.length); // add length
//Break
console.log("\n Break \n");

var fruits = ["apple","banana","orange","plum"];

var lastOffset= fruits.length-1; // add

console.log(fruits[lastOffset]); // add length
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange","plum" , 1, 2, 3];
console.log(myList);
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];
myList[3]= "grape"; // add

console.log(myList);
//Break
console.log("\n Break length \n");

var myList =["apple","banana","orange"];
myList[myList.length]= "grape"; // add

console.log(myList);
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];
myList[myList.length]= "grape"; // add
myList[myList.length]= "grape-1"; // add
myList[myList.length]= "grape-2"; // add
console.log(myList);
//Break
console.log("\n Break push \n");

var myList =["apple","banana","orange"];
myList.push("pineapple"); // push= last element add
console.log(myList);
//Break
console.log("\n Break push push  \n");

var myList =["apple","banana","orange"];
myList.push("pineapple"); //push= last element add
myList.push("plum"); //push= last element add

console.log(myList);
//Break
console.log("\n Break unshift \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); //  push == last element add
myList.unshift("plum"); // unshift == first element add

console.log(myList);
//Break
console.log("\n Break pop \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); // add push == last element add
myList.unshift("plum"); //add unshift == first element add

myList.pop(); // add pop = last element remove

console.log(myList);
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); // push == last element add
myList.unshift("plum"); //unshift == first element add

var lastElementReturn = myList.pop(); // add pop = last element return

console.log(myList,);
console.log(lastElementReturn); // add
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); // push == last element add
myList.unshift("plum"); //unshift == first element add

var lastElementReturn = myList.pop(); // add pop = last element return

   //console.log(myList,); // add //
console.log(lastElementReturn); // add
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); // push == last element add
myList.unshift("plum"); //unshift == first element add

var lastElementReturn = myList.pop(); // add pop = last element return
lastElement = myList.pop(); // add

console.log(myList,); // add //
console.log(lastElementReturn); // add
//Break
console.log("\n Break \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); // push == last element add
myList.unshift("plum"); //unshift == first element add

myList.shift(); // shift = first element remove

console.log(myList,);
//Break
console.log("\n Break here \n");

var myList =["apple","banana","orange"];

myList.push("pineapple"); //push == last element add
myList.unshift("plum"); //unshift == first element add

myList.shift(); // shift = first element remove
var firstElementReturn = myList.shift(); // first element return

console.log(myList,);
console.log(firstElementReturn);
//Break
console.log("\n Break \n");

var males= ["karim", "A Rahim", "sobush", "karima"];
var females = ["aesha", "ruzina"];

console.log(males,females);
//Break
console.log("\n Break \n");

var males= ["karim", "A Rahim", "sobush", "karima"];
var females = ["aesha", "ruzina"];

var lastPerson = males.pop(); // last element remove
females.push(lastPerson); // push == last element add

console.log(males,females);

//Break
console.log("\n Break check length \n");

var males= ["karim", "A Rahim", "sobush", "karima"];
var females = ["aesha", "ruzina"];

var lastPerson = males.pop(); // last element remove
females.push(lastPerson); // push == last element add

console.log(males,females);
console.log(males.length,females.length); // length check

//Break
console.log("\n Break add element \n");

var males= ["A karim", "A Rahim", "karima", "sobush"];
var females = ["aesha", "ruzina"];

var personToRemove = males[2]; // add
females.push(personToRemove); // push = last element add 

console.log(males,females);
console.log(males.length,females.length); // length check

//Break
console.log("\n Break delete element \n");

var males= ["A karim", "A Rahim", "karima", "sobush"];
var females = ["aesha", "ruzina"];

var personToRemove = males[2]; // add
females.push(personToRemove); // push = last element add 
delete(males[2]);

console.log(males,females);
console.log(males.length,females.length); // length check
//Break
console.log("\n Break splice (element delete) \n");

var males= ["A karim", "A Rahim", "karima", "sobush"];
var females = ["aesha", "ruzina"];

var personToRemove = males[2]; // add
females.push(personToRemove); // push = last element add 
males.splice(2,1); // splice = element delete

console.log(males,females);
console.log(males.length,females.length); // length check

//Break
console.log("\n Break slice-1 (element out) \n");
// slice = copy
var list =[
		"sun", //0
		"mon", //1
		"tue", //2
		"wed", //3
		"thu", //4
		"fri", //5
		"sat", //6
];

var chunk = list.slice(1,4); //out of 1 to 3 

console.log(list,chunk);
//Break
console.log("\n Break slice-2 (element out) \n");
// slice = copy
var list =[
		"sun", //0
		"mon", //1
		"tue", //2
		"wed", //3
		"thu", //4
		"fri", //5
		"sat", //6
];

var chunk = list.slice(2); //out of 2 to last out

console.log(list,chunk);
//Break
console.log("\n Break slice-3 (element out) \n");
// slice = copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var chunk = list.slice(-3); // out of 4 to last

console.log(list,chunk);
//Break
console.log("\n Break slice-4 (element out) \n");
// slice = copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var chunk = list.slice(-5,-3); //out of 2 to 3 

console.log(list,chunk);
//Break
console.log("\n Break splice-1 (element remove and out) \n");
// splice = cut
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var chunk = list.splice(1,3); // Remove and out of 1 to 3 

console.log(list,chunk);
//Break
console.log("\n Break splice-2 (element remove and out) \n");
// splice = cut
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var chunk = list.splice(-4,3); // Remove and out of 3 to 5

console.log(list,chunk);
//Break
console.log("\n Break splice-3 (element remove and out) \n");
// splice = cut
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var chunk = list.splice(-4); // Remove and out of 3 to last

console.log(list,chunk);

// End part 6 to 6.5
console.log("\n Break - Array-1")
//Start Array - 6.6
// Deep Copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var list2 = list;
list2[1] = "No Day";

console.log(list, list2);
// Or Print = document.write(list,"<br/>",list2);

console.log("\n Break - Array")
// Shallow Copy
var v1 = 1;
var v2 = v1; // shallow copy

v2 = 2;

console.log(v1, v2);
// Or Print = document.write(v1, "<br/>", v2);

console.log("\n Break - Array-2")

// Deep Copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var list2 = list.slice(); //good way
list2[1] = "No Day";

console.log(list, list2);
// Or Print = document.write(list,"<br/>",list2);

console.log("\n Break - Array-3")

// Deep Copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var list2 = [...list];
list2[1] = "No Day";

console.log(list, list2);
// Or Print = document.write(list,"<br/>",list2);

console.log("\n Break - Array-4")

// Deep Copy
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

var list2 = Array.from(list);
list2[1] = "No Day";

console.log(list, list2);
// Or Print = document.write(list,"<br/>",list2);

console.log("\n Break - Array-Concat-1")

// Concat
var list1 = [
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5

];

var list2 = [
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];
var list = list1.concat(list2);

console.log(list);
// Or Print = document.write(list);

console.log("\n Break - Array-Concat-2")

// Concat
var list1 = [
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5

];

var list2 = [
		"wed", //3 = -4
		"thu", //4 = -3

];

var list3 = [
		"fri", //5 = -2
		"sat", //6 = -1
]
var list = list1.concat(list2).concat(list3);

console.log(list);
// Or Print = document.write(list);

console.log("\n Break - Array-Concat-3")

// Concat
var list1 = [
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5

];

var list2 = [
		"wed", //3 = -4
		"thu", //4 = -3

];

var list3 = [
		"fri", //5 = -2
		"sat", //6 = -1
]
var list = list1.concat(list2,list3);

console.log(list);
// Or Print = document.write(list);

console.log("\n Break - Array-Concat-4")

// Concat
var list1 = [
		"sun ", //0 = -7
		" mon ", //1 = -6
		" tue ", //2 = -5

];

var list2 = [
		" wed ", //3 = -4
		" thu ", //4 = -3

];

var list3 = [
		" fri ", //5 = -2
		" sat ", //6 = -1
]
var list = [].concat(list1,list2,list3);

console.log(list);
// Or Print = document.write(list);

console.log("\n Break - Array-Access-1")

// Access
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

for (var i = 0; i<list.length; i++) {
	console.log("Element at ", i,"offset is ", list[i])
// Or Print = document.write("Element at ", i,"offset is ", list[i]);

}

console.log("\n Break - Array-Access-2")

// Access
var list =[
		"sun", //0 = -7
		"mon", //1 = -6
		"tue", //2 = -5
		"wed", //3 = -4
		"thu", //4 = -3
		"fri", //5 = -2
		"sat", //6 = -1
];

for (var i = (list.length-1); i>=0; i--) {
	console.log("Element at ", i,"offset is ", list[i])
// Or Print = document.write("Element at ", i,"offset is ", list[i]);

}

// start 6.8 = time 2:32








//document.getElementById("lastElement").innerHTML=myList;