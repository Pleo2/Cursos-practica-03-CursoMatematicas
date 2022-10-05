

// // calcular analisis salarial de una persona individualmente

// // primero buscar a la persona de la cual se quieren obtener los datos
// // ✅
// function findPerson(personFind) {
//     return salarios.find((person) => person.name == personFind )    
// }
// // la accion de buscar siempre es un return dentro de nuestro arr
// // la "persona 🧑‍⚕️" dentro de el parametra es el valor a regresar no significa nada ⬇️

// function analisisPersonalSalary(personFind) {
//     //convertimos la busqueda en jobs para entrar dentro de el obj trabajos
//     const jobs = findPerson(personFind).trabajos
    
//     // ahara hay que  crear un array con los sueldos a partir de el array trabajo 
//     const salaryArr = []

//     for (let index = 0; index < jobs.length; index++) {
//         const element = jobs[index].salario;
//         salaryArr.push(element) 
//     }
    
//     // ordenamos la lista para evitar que sea corupta
//     const salarylist = PlatziMath.ordenarLista(salaryArr)
//     console.log(salarylist)
//     // calculamos la mediana
//     const medianaSalary = PlatziMath.calcularMediana(salarylist)
//     console.log (medianaSalary)
//     return medianaSalary
// }

// analisisPersonalSalary('Juanita');

// console.log(PlatziMath.calcularPromedioDeaumento(300, 500).toFixed(2) + ' %');

// Analisis salarial para empresas 
// convertir el arreglo de salarios en una variable la cual contenga varios objetos 1 por cada anno 

// varible empreso = {}
// pero primero hay que filtrar todos las personas que trabajaron dentro de la empresa

// utilizamos obj.entries 



// const empresas = {};

// //se recorre todo el arreglo objeto por objeto que constituye a cada persona
// for (persona of salarios) {
//     // dentro de el objeto se recorre la key de trabajo
//     for (trabajo of persona.trabajos){
//         // la constate empresas es preguntada si para ver si contiene la key [empresas.trabajo] --> la cual corresponde al nobre de la empresa dentro de el objeto 
//         if (!empresas[trabajo.empresa]) {
//         // si la key no esta creada se crea imediatamente
//         // en forma de objeto
//         empresas[trabajo.empresa] = {};
//         }
//         // la const empresas es nuevamente preguntada si contiene ya creada dentro de la key empresas [trabajo.year]
//         if (!empresas[trabajo.empresa][trabajo.year]) {
//         // si no la contiene se crea un array dentro de la key empersa
//         empresas[trabajo.empresa][trabajo.year] = [];
//         }
        
//         // terminamos realizando un push a la constante de todos de el objeto empresa con el array year dentro el cual contendra los salarios de los trabajodores agrupados dentro de el array de year
//         empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
//     }
// }

// console.log(empresas)

// function CalcularMedianaEmpresas(nombre, year) {
//     if (!empresas[nombre]) {
//         console.warn('No existe esta empresa')
//         return
//     }
//     if (!empresas[nombre][year]){
//         console.warn('La empresa no realiza pago de salarios dentro de ese year')
//         return
//     }
//     const medianaEmpresa = PlatziMath.calcularMediana(empresas[nombre][year])
//     return medianaEmpresa
// }


// function medianaEmpresaYear(nombre, year) {
//     if (!empresas[nombre]) {
//     console.warn('La empresa no existe')
//     } else if (!empresas[nombre][year]) {
//     console.warn('La empresa no dio salarios ese año')
//     } else {
//     return PlatziMath.calcularMediana(empresas[nombre][year])
//     }
// }
