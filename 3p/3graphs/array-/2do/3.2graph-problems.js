/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * isSquare(g)
 *
 * indicates whether g is a squared matrix
 * @arg {matrix} g - graph
 * @returns {bool} - true or false, whether g is a squared matrix
 *
 * @calling example
 * isSquare(g)
 * 
 * PROBLEM 2
 * isSymmetrical(g)
 *
 * indicates whether g is a symmetrical matrix
 * @arg {matrix} g - graph
 * @returns {bool} - true or false, whether g is a symmetrical matrix
 *
 * @calling example
 * isSymmetrical(g)
 *
 * PROBLEM 3
 * isTree(t)
 *
 * indicates whether t is a tree
 * @arg {matrix} t - a tree
 * @returns {bool} - true or false, whether t is a tree
 *
 * @calling example
 * isTree(t)
 *
 * PROBLEM 4
 * isGraph(q)
 *
 * indicates whether q is a graph
 * @arg {matrix} q - graph, tree, matrix
 * @returns {bool} - true or false, whether q is a graph
 * may use all previous functions/methods
 *
 * @calling example
 * isGraph(q)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
let dirigida =  [
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
]
let noDirigida =  [
    [0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
]
let arbol =  [
    [0, 1, 0, 0],//1
    [1, 0, 1, 1],//2
    [0, 1, 0, 0],//3
    [0, 1, 0, 0],//4
]

const isSquire = (g) => {
    let flag=true
    for(let i=0; i <= g.length-1; i++){
        for(let j=0; j <= g[i].length-1; j++){
        }
        if(g.length-1 != g[i].length-1){
            flag=false
        }

    }
    return flag
}

console.log('is squire: ' + isSquire(dirigida))

const esSimetrica = (g) => {
    let flag=true
    for(let i=0; i <= g.length-1; i++){
        for(let j=0; j <= g.length-1; j++){
           if(g[i][j] != g[j][i]){
               flag=false
           }
        }
    }
    return flag
}

console.log('es Simetrica: ' + esSimetrica(noDirigida))

const esArbol = (t) => {
    let count = 0;
    let column = 0;
    let s = 0;
    let flag=true

    for (let i = 0; i <= t.length-1; i++) {
        for (let j = 0; j < t[i].length; j++, count++)
            column = count / t.length;
    }
    for (let i = 1; i <= t.length-1; i++) {
        s = 0;
        for (let j = 0; j < column; j++) {
            if (j < i) {
                s += t[i][j];
                if (s > 1) flag = false;
            }
        }
    }
    return flag;
}

console.log('es un arbol: '+esArbol(arbol))

const esGrafo = (g) => {
        let flag = true
        if (esArbol(g) == true) flag = false
        return flag
}

console.log('es un grafo: '+ esGrafo(arbol))