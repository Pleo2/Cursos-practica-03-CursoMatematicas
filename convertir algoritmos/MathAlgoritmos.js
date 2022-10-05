const arrayParaLaPrueba = [1, 2, 3, 6, 7, 9, 10, 11]
const MathAlgoritmos = {}

//* Promedio 

function CalcularPromedio(arr) {
    let sumaLista = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaLista = sumaLista + arr[i];
    }

    const promedio = sumaLista / arr.length;
    console.log(promedio);
    return promedio;
}

//*  Mediana de un array con function

// primero que todo hay que saber si un array es par o impar para determinar la operacion a realizar
// ademas de utilizal el metodo sort para para ordenar de mayor a menor o visersa para evitar corrumpir el calculo de lo mediana

function isPAR(list) {
    return !(list.length % 2);
}
function isImpar(list) {
    return list.length % 2;
}
function calcularMediana(list) {
    const listPar = isPAR(list);

console.log(listPar);
    
    if (listPar){

        const mitadlist1 = list.length / 2
        const mitadlist2 = mitadlist1 -1

        console.log(mitadlist1);
        console.log(mitadlist2);

        listDeMitades = []
        listDeMitades.push(mitadlist1);
        listDeMitades.push(mitadlist2);

        console.log(listDeMitades);

        MedianaListaPar = CalcularPromedio2(listDeMitades);

        console.log(CalcularPromedio2(listDeMitades));

        return MedianaListaPar
    }
}
function CalcularPromedio2(arr){
    let sumaLista = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaLista = sumaLista + arr[i];
    }

    const promedio = sumaLista / arr.length;
    console.log(promedio);
    return promedio;
} 


//* Metodo sort Ordenar array
//esta es la funtion utilizado para el ordenamiento de el array 
function ordenarArr(arrDesordenado) {
    const listaordenada = arrDesordenado.sort((a, b) => a - b)
    return listaordenada
}

// * Calcular la Moda de un array

function calcularModa(arr) {

    //guardar en un lugar la cantidad de veces que aparace un elemento en una lista
    // se crea un obj
    const listCount = {}

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (listCount[element]) {
            listCount[element] += 1
        } else {
            listCount[element] = 1
        }
    }
    console.log(listCount)
    
    // esa misma lista debe ser convertida en un array bidimensional que nos permitira odernar de mayor a menor los numeros que cuenten con un valor mas alto
    const listCountArr = Object.entries(listCount)
    console.log(listCountArr)

    // como aplicarle el sort a un arrayBidimesional
    const listCountOrdenada = ordenarSortArr(listCountArr)
    console.log(listCountOrdenada)
    // ahora debo imprimir el primer el array 1 solamente su key
    const arrDeModa =  listCountOrdenada[0]
    console.log(`La moda es: ${arrDeModa[0]}`);
    const arrParaElReturn = `La moda es ${arrDeModa[0]}`
    console.log(arrParaElReturn)
    //pora entrar en el ultimo elemento podemos usar arrDeModa[arrDeModa.lenght - 1]==> esto nos dara el valor de el ultimo si lo necesitamas
    return arrParaElReturn
}
// a la formula se debe de entrar mediante el index de cada arreglo individialmente es decir el value es igual a 1 y la keys a 0
function ordenarSortArr(arr){
    const arrOrdenado = arr.sort((a, b) => b[1] - a[1])
    return arrOrdenado
}




/*
todo ==> Math.round()
Obtiene el siguiente numero mas cercano( si es >.5 redondea hacia arriba, si es <.5 redonda hacia abajo)

Math.round(2.5) // output: 3
Math.round(2.49) // output: 2

todo ==> Math.floor()
Obtiene el numero entero anterior mas cercano (redondear hacia abajo).

Math.floor(2.99) // output: 2
Math.floor(2.5) // output: 2
Math.floor(2.49) // output: 2

todo ==> Math.ceil()
Obtiene el numero entero siguiente mas cercano (redondear hacia arriba).

Math.ceil(2.5) // output: 3
Math.ceil(2.49) // output: 3
Math.ceil(2.1) // output: 3

todo ==> ordenar de menor a mayor
todo     metodo "sort"
*/

