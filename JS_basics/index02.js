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
//testt = [];

//testt.length=0;

testt.splice(0,testt.length);

console.log(testt);
console.log(testt2);

//Combining & slicing arrys
let f = [1,2,3];
let s = [4,5,6];

console.log(f.concat(s));

//let sl = f.slice(1,3);
//let sl = f.slice(0);
let sl = f.slice();
console.log(sl);

//Spread Operator
let ff = [1,2,3];
let ss = [4,5,6];
let combo = [...ff, 'a',...ss,2,true];
console.log(combo);

//copy with spread operator
let xx = [...combo];
console.log(xx);



let arr = [10,20,30,40,50];
// for(let val of arr)
// {
//     console.log(val);
// }

// arr.forEach(function(huhu)   //for-each loop
// {
//     console.log(huhu);
// });

arr.forEach(huhu => console.log(huhu)); //arrow-fxn of for-each

//joining arrays
let nm = [1,2,3,4,5,6];
let j = nm.join('');
console.log(j);

//splitting arrays
let msgg = 'this is msg';
let parts = msgg.split(' ');
console.log(parts);


//sorting
let issort = [2,1,7,1,0];
issort.sort();
console.log(issort);
issort.reverse();
console.log(issort);


//filtering arrays
let ar = [1,2,-3,-1];
// let checkk = ar.filter(function(v){
//     return v>=0;
// })
// console.log(checkk);

//arrow function of above code
let checkk = ar.filter(v=> v>=0);
console.log(checkk);


//Mapping Arrays
let m = [2,3,4,5];
// let mtest = m.map(function(l)
// {
//     return 'student_no' + l;
// })
// console.log(mtest);

//arrow fxn of above map 
let mtest = m.map(l=> 'student_no' +l);
console.log(mtest);

//Mapping with objects
let zone = [1,2,-5,-9];
let zf = zone.filter(t=> t>=0);

// let zmap = zf.map(function(vall)
// {
//     return {valueii: vall};
// })
// console.log(zmap);

//arrow fxn of above
let zmap = zf.map(vall => ({valueii: vall}));
console.log(zmap);

//CHAINING !!
//let zmap = zone.filter(t=> t>=0).map(vall => ({valueii: vall}));
//let zmap = zone
//               .filter(t=> t>=0)
//               .map(vall => ({valueii: vall}));    


//#functions
function fxn() 
{
    console.log('kya haal hai ji');
}

fxn();  //function hoisting i.e, all function declaration moves above automatically by JS engine during execution

//fxn assignment
let stand = function walk() {
    console.log('walking');
}

stand(); //but wont be able to call walk directly now 
//also
let hha = stand;
hha();

//named function assignment and anonymous function assignment
let stand2 = function() {
    console.log('walking');
}
stand2();

function summ(a,b)
{
    console.log(arguments);   //special object : argument
    return a+b;
}
let ansa=summ(1,2,3,4,5,6);

//dynamic function using argument to add all values
function suum(a,b)
{
    let total = 0;
    for(let value of arguments)
    total = total + value;
    return total;
}
let suumm = suum(1,2,3,45,5,6);
console.log(suumm);

//rest operator/parameter
function oo(num,a,...args) //rest parameter should be last formal parameter
{
    console.log(args);
}

oo(12,3,4,5,7);   // will store in array

//default parameter
function si(p,r=5,y=100)
{
    return p*r*y/100;
}
console.log(si(1,100)); //hack - use undefined


let prs = {
    fname : 'ujjawal',
    lname : 'tyagi' 
};

//console.log(prs);
function fulname()
{
    return `${prs.fname}  ${prs.lname}`;   //backtick is used so spaces and indentation will be preserved
}

//console.log(fulname());

//issue - read only function (above one)
let prsn = {
    fname : 'ujjawal',
    lname : 'tyagi',
    get fulname()
   {
    return `${prs.fname}  ${prs.lname}`;   //backtick is used so spaces and indentation will be preserved
   },
   set fulname(value){
       let parts = value.split(' ');
       this.fname=parts[0];
       this.lname=parts[1];
   }
};

//console.log(prsn.fulname);
prsn.fulname= 'huhu kumar';
console.log(prsn.fulname);