const body = document.querySelector('body')
const h1 = document.createElement('h1')

//------------------------------------------------------------------------------------------------------------------

h1.innerText = 'Curso de Matematica con JavaScript'
body.appendChild(h1)

// * CUADRADO 

const clado = 5
const pAreaFormulaC = clado * 4;

// [Perimetro 'cm'] de un "cuadrado" & [Area 'cm2']
console.log(`${pAreaFormulaC} cm`)
console.log(`${pAreaFormulaC} cm2`)

// autamatiza el calculo para varios cuadrados
function calcularAyPcuadrado(lado) {
    rC = lado * 4
    console.log(`${rC} cm2`)
    console.log(`${rC} cm`)
}
calcularAyPcuadrado(clado)

// * TRIANGULO

const trianguloL1 = 7
const trianguloL2 = 7
const trianguloBase = 10
const trianguloAltura = 7
const trianguloP = trianguloL1 + trianguloL2 + trianguloBase

// Perimetro de un triangulo
console.log(`${trianguloP} cm`)

// Area de un triangulo
const trianguloArea = (trianguloBase * trianguloAltura) / 2
console.log(`${trianguloArea} cm2`)

// autamatizacion que se puede utilizar cualquier triangulo
function calcularAyPtriagulo(lado1, lado2, base, altura) {
    rTperimetro = lado1 + lado2 + base
    rTarea = (base * altura) / 2

    console.log(`${rTperimetro} cm`);
    console.log(`${rTarea} cm2`);
}

calcularAyPtriagulo(trianguloL1, trianguloL2, trianguloBase, trianguloAltura)

// Calcular la altura de un triangulo isosceles 

function calcularAltura(lado1, base) {
    if (lado1 == base){
        console.warn('Este no es un triangulo isosceles')
    }
    else{
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4))
    }
}

//  > Math ➡️ es un metodo dentro de JavaScript para representar los Diferentes operadores utilizados en matematicas 
//  > example: Math.sqrt() --> raiz cuadrada de lo que este dentro de el parentesis

console.log(calcularAltura(trianguloL1, trianguloBase))

// * TEOREMA DE PITAGORAS

//todo  Calcular la altura de un triangulo "escaleno"
// semiperimetro -> S = (a + b + c) / 2
// h = (2 / a) * raiz(S * (S - a) * (S - b) * (S - c))

const l1escaleno = 6
const l2escaleno = 8
const l3escaleno = 10

function calcularAlturaEscaleno(lado1, lado2, lado3) {
    const S = (lado1 + lado2 + lado3) / 2
    const h = (2 / lado1) * Math.sqrt(S * ((S - lado1) * (S - lado2) * (S - lado3)))
    console.log(`La altura es: ${h}`);
}

calcularAlturaEscaleno(l1escaleno, l2escaleno, l3escaleno)

//-----------------------------------------------------------------------------------------------------------------

// * PORCENTAJES

//todo ==> porcentaje DESCUENTO
// precioConDescuento <- precio * ((100 - descuento) / 2)

function precioConElDescuento(precio, descuento) {
    pCd = precio * ((100 - descuento) / 100)
    return pCd
}

console.log(`Total a Pagar: ${precioConElDescuento(800, 30)}`);

//utilizar esta formula dentro de un html para que el usuario pueda interactuar con el mismo

