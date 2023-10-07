//Promises
let promm = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000)
    // resolve(1111);
    reject(new Error('Error agya bhai :)'));
})

console.log('first');

//then and catch method
let prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000)
    //resolve(1111);
    reject(new Error('Error agya bhai :)'));
})

console.log('first');
// prom.then((value)=>{ console.log(value) });
// prom.catch((error)=>{ console.log('Received an error') });
prom.then((value)=>{ console.log(value) },  (error)=>{ console.log('Received an error')});


//some more
let wada = new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log('settimeout 1 started');
    },3000);
    resolve(true);
})

let output = wada.then(()=> {
    let wada2 = new Promise(function(resolve,reject){
        setTimeout(()=> {
            console.log('settimeout 2 started');
        },4000);
        resolve('wada 2 was here');
    })
    return wada2;
})

output.then((value) => console.log(value));


//for promise chaining - Async Await
async function abcd() {
    return 7;
}
//abcd()

async function utility(){
    let mh = new Promise( (resolve, reject)=> {
        setTimeout(() => {
            resolve("mh weather is too much");
        }, 1000);
    });
    
    let up = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("up weather is too much");
        }, 2000);
    });

    let mM = await mh;
    let upM = await up;

    return [mM, upM];
}

//fetch API
async function uti(){   
     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
     let output = await content.json();
     console.log(output);
}
uti();

//post()
async function helper(){
    let option = {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
    
      let calldat = await fetch('https://jsonplaceholder.typicode.com/posts',option);
      let res = calldat.json();
      return res;
}

async function ress() {
    let ans = await helper();
    console.log(ans);
}
ress();


//Closures
function outer(){
    let temp = "raja";
    function inner(){
        console.log(temp);
    }
    return inner;
}

let show = outer();
show();