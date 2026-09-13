function calculadorIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

console.log(calculadorIMC(1.70, 70));
console.log(calculadorIMC(1.60, 60));
console.log(calculadorIMC(1.80, 80));