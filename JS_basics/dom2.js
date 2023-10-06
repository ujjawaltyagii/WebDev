console.log('Bolo tara ra ra');

//adding 100 para 
const t1 = performance.now();
for(let i=1;i<100;i++)
{
    let newele = document.createElement('p');
    newele.textContent = "This is your boi Para" + i;

    document.body.appendChild(newele);
}
const t2 = performance.now();
console.log("1st one took this time : "+  (t2-t1));

//optimizing 
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i = 1;i<100;i++)
{
    let ele = document.createElement('p');
    ele.textContent = "This is para" + i;

    mydiv.appendChild(ele);
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("2nd one took this time : "+  (t4-t3));


//Docment Fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1;i<100;i++)
{
    let newele = document.createElement('p');
    newele.textContent = "This is your boi Para" + i;

    fragment.appendChild(newele);
}

document.body.appendChild(fragment);  //single reflow and single repaint
const t6 = performance.now();

console.log("this is elon musk : " + (t6-t5));


//Single threading in js
function addpara(){
    let para = document.createElement('p');
    para.textContent = "Js is single(like me :) )";
    document.body.appendChild(para);
}

function addnewpara(){
    let para = document.createElement('p');
    para.textContent = "Like for real bro";
    document.body.appendChild(para);
}

addpara();
addnewpara();

