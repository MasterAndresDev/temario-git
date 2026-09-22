console.log("Hello, World!");
console.log("This is a sample application.");

const version = "1.0.0";
console.log("Application version: " + version);

function saludar(nombre) {
    console.log("hola " + nombre);
}

saludar("Juan");

function despedir(nombre) {
    console.log("Adiós " + nombre);
}

despedir("Juan");

function restar(a, b) {
    return a - b;
}

const resultado1 = restar(10, 5);
console.log("Resultado de la resta: " + resultado1);
function sumar(a, b){
    return a + b;
}

const resultado2 = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado2);

function multiplicar(a, b) {
    return a * b;
}

const resultado3 = multiplicar(4, 6);
console.log("El resultado de la multiplicación es: " + resultado3);

function dividir(a, b) {
    if (b === 0) {
        console.log("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

const resultado4 = dividir(10, 2);

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

const resultado5 = potencia(2, 3);
console.log("El resultado de la potencia es: " + resultado5);

console.log("Fin del programa master.");
