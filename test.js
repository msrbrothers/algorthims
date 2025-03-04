


async function promis(index) {
    return new Promise((res, rej) => {
        const mul = index * 2
        console.log("prmiss");

        setTimeout(() => {
            res(mul)
        }, 1000);
    })
}


setTimeout(() => {
    console.log('time ut utside');
}, 1000);


async function main(params) {
    console.log("inside loop");

    for (let index = 1; index < 6; index++) {
        const res = await promis(index);
        console.log(res);
    }
}


//main()

console.log("add ::", +'5' + "3" + "2");
console.log("add ::", '5' - 3);

let x = 30;
function print(params) {
    console.log("inside func ::", x);
    var x = 20
    x = 60;
}

print()

console.log("outside", x);

// pars



console.log("step-1", typeof undefined);
console.log("step-2", typeof null);
console.log("step-3", typeof NaN);
console.log("step-4", typeof {});
console.log("step-5", Number === Number);
console.log('fun type', typeof function name(params) {});


console.log("step-6", 1 < 2 < 3);  //true < 3
console.log("step-7", 3 > 2 > 1);  //true > 1 

console.log("ster 8", true < 3);
console.log("ster 9", true >= 1);

console.log("Check infinity ::",-Infinity > -1000000);


var a = 10
var b = a++;
console.log('step 10', b);

const obj3 = {
    id: 1,
    name: "test"
}

Object.defineProperties(obj3, {
    id: {
        writable: false
    }
});

obj3.id = 10
console.log(obj3);

function print(parame) {
    console.log(this.name, parame);
}

print.apply({ name: "ravi" }, ["teste", "teste2"])

const [i1, i2, i3] = [1, 2, 3, 4]

console.log(i3);

var name = "test";

if (true) {
    console.log("inside block", name);
    var name = "test2"
}

function fun(params) {
    var name = "test3"
    console.log("inside function",name);
    
}
{
    var name = "test4";

    {
        var name = "test5"
    }
}

fun()

console.log("outside ::", name);




setImmediate(()=>{
    console.log('Hello from setimmediate');
})



setTimeout(() => {
    console.log('Hello from time out');
    
}, 0);

process.nextTick(()=>{
    console.log('hello from next ticks');
})

console.log([1,2,3,4].slice(0,2));
