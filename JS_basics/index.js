console.log('la la lala la....');
/* re-declaration is not possible and local scope in let
let a=10;
let a=5;
*/

//re-declaration is possible in var and global scope
var a=10;
var a=5;
console.log(a);

let b=5;
console.log(a);
b='tara ra ra';
console.log(b);

let rectangle={
    length:1,
    breadth:2,

    draw: function() {
        console.log('draw');
    }
};

//factory-function
function createRectangle(len, br) {
    //  let rectangle={
        return rectangle={
        // length:1,
        // breadth:2,
        length: len,
        breadth: br,
        // length,
        // breadth,
    
        draw: function() {
            console.log('draw');
        }
    };
   // return rectangle;
}

let rec = createRectangle(5,4);


//constructor fuction -> pascal notation - first letter of every word is capital
function Rect(a,b) {
    this.length = a;
    this.breadth = b;
    this.draw= function(){
        console.log('drawing');
    }
}

let output = new Rect(2,3);
output.color='red';
console.log(output);

delete output.color;
console.log(output);

//function is a object, every object has constructor (function's constructor)
let abc = new Function('length','breadth', `this.length = length;
this.breadth = breadth;
this.draw= function(){
    console.log('drawing');
}`);

let ans = new abc(1,10);
console.log(ans);

//value updation(primitive date type and reference data type)
let aaa=10;
let bbb=aaa;
aaa++;
console.log(aaa);  //11
console.log(bbb);  //10

let ab={value:10};  //referrence type
let bb=ab;          //address pass hota hai
ab.value++;
console.log(ab.value);  //11
console.log(bb.value);  //11

let hau = 100;
function inc(hau)  //primitive - copy bnn rhi || pass by value
{
    hau++;
}
inc(hau);            
console.log(hau);   //no increment


let hai = {value:10};
inc(hai)
{
    hai.value++;
}
inc(hai);
console.log(hai.value);   //full increment

//for-in loop (apply for objects)
let habibi={
    length: 5,
    breadth: 4
};

for(let key in habibi)
{
    console.log(key,habibi[key]);
}

//for-of loop (for iterables)
let habibi02={
    lengt: 55,
    breadt: 44
};
for(let nas of Object.entries(habibi02))
{
    console.log(nas);
}
for(let nas of Object.keys(habibi02))
{
    console.log(nas);
}


//check existence of properties
if('color' in habibi)
{
    console.log('present');
}
else
{
    console.log('absent');
}


//clone objects
//#1
let haha={value: 5};
let dest={};
for(let key in haha)
{
    dest[key]=haha[key];
}
haha.value++;
console.log(haha); //6
console.log(dest);  //5

//#2
let buu={bete:69};
let outputt= Object.assign({},haha,buu); //multiple source
console.log(outputt);

//#3
let des={...haha};
console.log(des);

