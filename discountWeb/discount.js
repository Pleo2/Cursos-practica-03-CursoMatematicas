//Calculadora de Descuentos con porcentajes
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discuount')
const btnCalcular = document.querySelector('.btn')
const PriceTOpaid = document.querySelector('.PriceTOpaid')
//Canjear cupon de descuento
const priceCupon = document.querySelector('#Price-cupon')
const codeCupon = document.querySelector('#Code-cupon')
const canjearCuponBtn = document.querySelector('.CanjearCuponBtn')
const cuponCanje = document.querySelector('.cupon_canje')
//Canjear cupon con descuento mediante objetos
const priceCouponObj = document.querySelector('#Price-cupon__obj')
const codeCouponObj = document.querySelector('#Code-cupon__obj')
const canjearCouponObj = document.querySelector('.CanjearCupon__obj--Btn')
const cuponCanjeObj =  document.querySelector('.cupon_canje__obj')
class Coupon{
    constructor(name, discount){
        this.name = name,
        this.discount = discount
    }
}
const coupons = []
coupons.push(new Coupon('platziDis', 20), new Coupon('piolinosDay', 50), new Coupon('saturdayFest', 15), new Coupon('mondayDis', 18))


btnCalcular.addEventListener('click', CalculatePriceWithDiscount)
canjearCuponBtn.addEventListener('click', CanjearCupon)
canjearCouponObj.addEventListener('click', CalcualarCouponDiscountObj)


function CalculatePriceWithDiscount() {
    const price = Number(inputPrice.value)
    const discount = Number(inputDiscount.value)
    if (!price || !discount){
        PriceTOpaid.innerText = 'Llena el formulario!!'
        return
    }
    if (discount > 100){
        PriceTOpaid.innerText = 'Ya quisieras todo, REGALADO!!'
        return
    }
    // const pCd = price * ((100 - discount) / 100)
    calcularDescuentoRapido(price, discount)
    PriceTOpaid.innerText = `El precio con Descuento: $${pCd.toFixed(2)}`
    // PriceTOpaid.innerText = `El precio con Descuento: $${pCd.toFixed(2)}`
}
function CanjearCupon() {
    const priceCV = Number(priceCupon.value)
    const codeCuponV = codeCupon.value
    const platziDis = 35
    if (!priceCV){
        cuponCanje.innerText = 'Ingresa el precio!! Aunque sea 🎱'
        return
    }
    if (priceCV > 0 && codeCuponV === '2piolinosDay'){
        cuponCanje.innerText = 'Gracias Piolina tu compra Salio Gratis'
        return
    }
    if (priceCV > 0 && codeCuponV === 'platziDis'){
        calcularDescuentoRapido(priceCV, platziDis)
        cuponCanje.innerText = `Su precio con Descuento: $${pCd.toFixed(2)}`
        return
    }
    if (!codeCuponV && priceCV > 0){
        cuponCanje.innerText = 'Felicidades por pagar el precio completo'
        return
    }
}
function CalcualarCouponDiscountObj() {
    // se crean las constantes pricipales extraidas de el usuario 
    const price = Number(priceCouponObj.value)
    const coupon = codeCouponObj.value
    
    if (!price && !coupon){
        cuponCanjeObj.innerText = 'rellena!! aunque sea el precio 🛑'
        return
    }
    if (price && !coupon){
        cuponCanjeObj.innerText = 'Gracias!! por pagar sin descuento 🥳'
        return
    }
    let discount
    
    function isCouponInArray(couponsElement) { // esta funtion se encarga de verificar si se contiene el cupon dentro de el array
        return couponsElement.name == coupon // repasarlo en el curso de recorridos en array
    }
    const couponInArray = coupons.find(isCouponInArray)
    
    if (couponInArray){
        discount = couponInArray.discount
    }
    else {
        cuponCanjeObj.innerText = "El cupon es invalido ☠️"
        return
    }
    
    calcularDescuentoRapido (price, discount)
    cuponCanjeObj.innerText = `Su precio con descuento es $${pCd}`
}
function calcularDescuentoRapido(price, discount) {
    pCd = price * ((100 - discount) / 100)
}
// para representar nuestros 'float o double' podemos utilizar metodos como lo son 
// Math.round() para redondiar a numeros enteros || `let`.toFixed(cantidad de desimales desiados)


//* metodos Math javaScrit

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

