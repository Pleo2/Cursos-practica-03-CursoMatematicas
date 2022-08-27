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


btnCalcular.addEventListener('click', CalculatePriceWithDiscount)
canjearCuponBtn.addEventListener('click', CanjearCupon)



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
    const KinokoD = 35
    if (!priceCV){
        cuponCanje.innerText = 'Ingresa el precio!! Aunque sea 🎱'
        return
    }
    if (priceCV > 0 && codeCuponV === '2302PiolinosporSiempre'){
        cuponCanje.innerText = 'Gracias Piolina tu compra Salio Gratis'
        return
    }
    if (priceCV > 0 && codeCuponV === 'Kinoko'){
        calcularDescuentoRapido(priceCV, KinokoD)
        cuponCanje.innerText = `Su precio con Descuento: $${pCd.toFixed(2)}`
        return
    }
    if (!codeCuponV && priceCV > 0){
        cuponCanje.innerText = 'Felicidades por pagar el precio completo'
        return
    }
}









function calcularDescuentoRapido(price, discount) {
    pCd = price * ((100 - discount) / 100)
}
// para representar nuestros 'float o double' podemos utilizar metodos como lo son 
// Math.round() para redondiar a numeros enteros || `let`.toFixed(cantidad de desimales desiados)