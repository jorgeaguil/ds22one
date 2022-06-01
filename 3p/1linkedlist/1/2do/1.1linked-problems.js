/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, u object
 * @returns {bool} - true or false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
function Nodo(datos) {
    this.datos = datos
    this.next = null
}
const traverse=(n)=>{//es6
    let c=n//iterador
    while(c){//exists
        if(c.data)return n
        c=c.next
    }
    return null
}
const contains = (v) => {
    if(traverse(v)==v)return true
    return false

}
let n1 = new Nodo(3)
let n2 = new Nodo(-2)
let n3 = new Nodo(1)
n1.next=n2
n2.next=n3
let n=0

console.log(contains(n2))
console.log(n1)