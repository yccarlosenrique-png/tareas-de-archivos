function valorHora(sueldoMensual) {
    return sueldoMensual / 40;
}

let sueldo = 1200;
let hora = valorHora(sueldo);

console.log("El valor de tu hora de trabajo es: S/ " + hora);