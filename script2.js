
let aj = "it is  string"
console.log(aj)
let arr = [1, 2, 3, 4, 5]
console.log(arr[3])
function start() {
    var ar = [2, 4, 5, 3, 1]
    console.log(ar.pop())
    return ar.pop()
}
let num = start()
console.log(`${num} is deleted from array`);
let a = [4, 2342, 32, 23323];
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
let itr = a[Symbol.iterator]()
console.log(itr.next());
console.log(`it is the first element of array`)
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
let iter = arrayIterator(a)
let arindx = 0;
function arrayIterator(a) {
    return {
        next() {
            if (arindx < a.length) {
                return {
                    value: a[arindx++],
                    done: false

                }
            }
        }
    }
}
console.log(iter.next());


const x = Symbol("CVR")
const y = Symbol("CVR")
let sh = (x == y)
console.log(sh)
function* sampleFunction() {
    console.log("1");
    console.log("1")
    return "Hello"
}


let g = sampleFunction()
console.log(g.next())


