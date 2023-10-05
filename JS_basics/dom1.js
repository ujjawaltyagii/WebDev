console.log('hehe...he');
//removeEventListener will only work if same event function is passed i.e. if we directly pass function so even if the functioni is same in both
//addeventlistnere and remove still it won't work
function eventFunction(){
    console.log('aaaaii');
}

document.addEventListener('click',eventFunction);
document.removeEventListener('click',eventFunction);

//event object
const content = document.querySelector('#obj');
content.addEventListener('click',function(event)
{
    console.log(event);
});

let links = document.querySelectorAll('a');
let secondlink = links[1];

secondlink.addEventListener('click',function(event)
{
    event.preventDefault();
    console.log('Action prevent kar dia vai :)');
})

//////////////////////////////////////////////////////////////////

function parastatus(event){
    console.log('pta ni kya hora');
}
let dv = document.createElement('div');
for(let i=1;i<=20;i++)
{
    let newele = document.createElement('p');
    newele.textContent = 'This is elon musk' + i;

    newele.addEventListener('click',parastatus);
    dv.appendChild(newele);
}
document.body.appendChild(dv);

//----optimization
let dv = document.createElement('div');

function parastatus(event){
    // console.log('pta ni kya hora');
    console.log('test' + event.target.textContent);
}

dv.addEventListener('click',parastatus);  //but will work on whole div i.e. will loose individuality 
for(let i=1;i<=20;i++)
{
    let newele = document.createElement('p');
    newele.textContent = 'This is elon musk' + i;

    
    dv.appendChild(newele);
}
document.body.appendChild(dv);

//use target to make it specific

//------nested me issue hora
let ele = document.querySelector('#wrapper');

ele.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN')   // optimized using nodename
    {
        console.log('span pr click kia' + event.target.textContent);
    }
});

//dispatch event
let b = document.querySelector('#wrapper');
b.addEventListener('click',function(){
    alert('Uwu');
});

let customevent = new Event('click');
b.dispatchEvent(customevent);