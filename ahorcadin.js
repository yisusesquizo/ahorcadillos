var palabras = ["ANIVERSARIO", "TEC", "BUFALO", "COMIDA", "CELEBRACION", "ESCUELA", "INGENIERIA"];
var palabra = palabras[Math.floor(Math.random() * palabras.length)];
var progreso = Array(palabra.length).fill("_");
var errores = 0;

function actualizar() {
    document.getElementById("palabra").innerText = progreso.join(" ");
    document.getElementById("error").innerText = "Errores: " + errores + "/6";
}
actualizar();

function jugar(letra) {
    document.getElementById(letra).disabled = true;
    var ok = false;

    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            progreso[i] = letra;
            ok = true;
        }
    }

    if (!ok) errores++;
    actualizar();

    if (!progreso.includes("_")) {
        document.getElementById("msj").innerText = "¡GANASTE!";
    } else if (errores >= 6) {
        document.getElementById("msj").innerText = "¡PERDISTE! Era: " + palabra;
    }
}
