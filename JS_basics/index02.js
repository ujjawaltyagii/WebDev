console.log('chal rha kya ?!');

let ans=Math.random();
console.log(ans);
//0.26690062736677556
Math.PI;
//3.141592653589793
Math.round(1.5);
//2
Math.max(2,5,7,9);
//9
Math.min(2,5,7,9);
//2
Math.abs(-2);
//2

//string can be primitve or referrence type
let lname = 'uchiha';
let fname = new String('xyz');
typeof(fname)
//'object'
typeof(lname)
//'string'


lname.length
//6

lname[0]
//'u'

lname.includes('z')
//false

lname.startsWith('uch')
//true

lname.endsWith('a')
//true

lname.indexOf('c')
//1

lname.toUpperCase();
//'UCHIHA'

lname.trim();
//'uchiha'

lname.replace('uch','hah');
//'hahiha'

let word = 'This is my msgwa';
let outt = word.split(' ');
console.log(outt);

let msg = 
`chal 
gya 
bhai ${word}`;
console.log(msg);

let date = new Date();
let datee = new Date('1 July 2002');
let dateee = new Date(2002, 6 , 1, 6);
dateee.setFullYear(20001);
dateee.getFullYear();
console.log(dateee);

//Arrays - object/reference type
//insertion
let num = [1,2,3,4];
console.log(num);

num.push(5); //end
console.log(num);

num.unshift(0);   //begin
console.log(num);

num.splice(2,0,'a','b');    //at a particular index
console.log(num);

//searching
console.log(num.indexOf(1));
if(num.indexOf(3)!=-1)
console.log('present');

console.log(num.includes(0));

console.log(num.indexOf(0,2));   //search will start from index 2 for value 0

// searching in reference/objects (include and indexof won't work)
let course = [
    {no:1, name:'abc'},
    {no:2, name:'xyz'}
]; 
console.log(course);

// let pp = course.find(function(z) {
//     return z.name === 'abc';
// });

let pp = course.find(z => z.name === 'abc');  //arrow function
console.log(pp);

//removing element
let test = [1,2,3,4,5];
test.pop();  // del 5 (end)
test.shift();  // del 1  (begin)
test.splice(1,2);  // (middle)
console.log(test);

//emptying an array
let testt = [1,2,3,4,5];
let testt2 = testt;
testt = [];
console.log(testt);
console.log(testt2)