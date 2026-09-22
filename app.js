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

function sumar(a, b){
    return a + b;
}

const resultado = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado);