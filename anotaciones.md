# Como convertir formulas matematicas a javaScript

todas las formulas se encuentran en el respectivo main.js

importante todas estas formulas matematicas se deben realizar mediantes function 
las cuales facilitan que el codigo sea reutilzable

Para realizar este tipo de calculos matematicos utilizamos metodos de JavaScript

```JavaScript
// para este caso en especifico el metodo math para utilizar la raiz cuadrada
Math.sqrt(648)

// en conjunto con operadores muy poco comunes como lo son:

** -> 5 ** 5 == 125
```

potenciacion es decir para multiplicar un numero repetidas veces sobre si mismo

Tambien tenemos la opcion de convertir nuestros float number limitandolos con las cantida 
de caracteres necesarios como tambient redondiarlos

```javaScript
console.log(${let.toFixed(2)}) // el "2" es la cantidad de desimales de el numero
console.log(Math.round(let)) // con este metodo se redondea un numero
```

## metodo find and metodo Filter

El método filter itera por todos los elementos de un arreglo.

mientras que find regresa el primer elemento que cumpla con la condición. Por lo tanto, 
si sólo se está buscando un elemento.

el método más óptimo es find, ya que, apenas encuentre al elemento, dejará de iterar por los demás.

## metodo sort (ordenar de menor a mayor un array) estudiar un algoritmos de ordenamiento estructura de datos y complejidad algoritmica

este metodo se puede utilizar para ordenar de mayor a menor o viseversa a travez de arrow funtion por lo general la funtion de el metodo sort el equivalente a un condicional el cual es utilizado para determinar que se va a hacer con cada index dentro de el array a ordenar

## Diferentes formas de convertir un obj en array 

[![Screenshot-from-2022-08-31-00-43-43.png](https://i.postimg.cc/Kc0C3FR7/Screenshot-from-2022-08-31-00-43-43.png)](https://postimg.cc/6TGMFkVT)

esto nos permite entrar en los diferentes valores dentro de un obj, desde su key o su value haciendonos el trabajo mas facil

```js 
object.keys(obj) ==> //nos da un array expresando las keys de un objeto
object.value(obj) ==> //nos da un array expresando los value dentro de las keys de el  objeto
object.entries(obj) ==> //nos da un array expresando los objetos en forma de un array con arrays dentros los cuales contienen cada uno su respectivo key y obj ==> esto es conocido como array bidimensional
```

## Como enlazar un archivo js con otro js

```html
<body>



<script scr ="./javaScript que se va a importar en los que esten abajo " >
<script scr ="./javaScript-que tiene acceso al otro " ></script>
</body>

```

Basicamente se importa dentro de el html y el que este abajo importa todos los que se encuentron arriba de el teniendo acceso a todas su variable, functiones, obj, array