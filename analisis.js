// calcular analisis salarial de una persona individualmente

// primero buscar a la persona de la cual se quieren obtener los datos
// ✅
function findPerson(personFind) {
    return salarios.find((person) => person.name == personFind )    
}
// la accion de buscar siempre es un return dentro de nuestro arr
// la "persona 🧑‍⚕️" dentro de el parametra es el valor a regresar no significa nada ⬇️

function analisisPersonalSalary(personFind) {
    //convertimos la busqueda en jobs para entrar dentro de el obj trabajos
    const jobs = findPerson(personFind).trabajos
    
    // ahara hay que  crear un array con los sueldos a partir de el array trabajo 
    const salaryArr = []

    for (let index = 0; index < jobs.length; index++) {
        const element = jobs[index].salario;
        salaryArr.push(element) 
    }
    
    // ordenamos la lista para evitar que sea corupta
    const salarylist = PlatziMath.ordenarLista(salaryArr)
    // calculamos la mediana
    const medianaSalary = PlatziMath.calcularMediana(salarylist)
    return medianaSalary
}


function calcularPromedioDeAumento(personFind) {
    const jobs = findPerson(personFind).trabajos
    
    let porcentajeDeIncremento = []

    for (let i = 1; i < jobs.length; i++) {
        const salarioAntiguo = jobs[i - 1].salario
        const salarioNuevo = jobs[i].salario
        const incremento = salarioNuevo - salarioAntiguo
        const incrementoPor = (incremento / salarioAntiguo)
        porcentajeDeIncremento.push(incrementoPor.toFixed(2))
    }
    const proyetionSalary = PlatziMath.calcularMediana(porcentajeDeIncremento)

    const proximoSalario = (jobs[jobs.length-1].salario) + proyetionSalary * jobs[5].salario
    return proximoSalario
}

console.log(analisisPersonalSalary('Juanita'))
console.log(`${calcularPromedioDeAumento('Juanita')}`)

const empresas = {};
//se recorre todo el arreglo objeto por objeto que constituye a cada persona
for (persona of salarios) {
    // dentro de el objeto se recorre la key de trabajo
    for (trabajo of persona.trabajos){
        // la constate empresas es preguntada si para ver si contiene la key [empresas.trabajo] --> la cual corresponde al nobre de la empresa dentro de el objeto 
        if (!empresas[trabajo.empresa]) {
        // si la key no esta creada se crea imediatamente
        // en forma de objeto
        empresas[trabajo.empresa] = {};
        }
        // la const empresas es nuevamente preguntada si contiene ya creada dentro de la key empresas [trabajo.year]
        if (!empresas[trabajo.empresa][trabajo.year]) {
        // si no la contiene se crea un array dentro de la key empersa
        empresas[trabajo.empresa][trabajo.year] = [];
        }
        
        // terminamos realizando un push a la constante de todos de el objeto empresa con el array year dentro el cual contendra los salarios de los trabajodores agrupados dentro de el array de year
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
function CalcularMedianaEmpresas(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('No existe esta empresa')
        return
    }
    if (!empresas[nombre][year]){
        console.warn('La empresa no realiza pago de salarios dentro de ese year')
        return
    }
    const medianaEmpresa = PlatziMath.calcularMediana(empresas[nombre][year])
    return medianaEmpresa
}
console.log(`mediana de empresas es: ${CalcularMedianaEmpresas('Freelance', 2020)}`);
