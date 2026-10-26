var palabras = ["ANIVERSARIO", "TEC", "BUFALO", "COMIDA", "CELEBRACION", "ESCUELA", "INGENIERIA"];
var palabra = palabras[Math.floor(Math.random() * palabras.length)];
var progreso = Array(palabra.length).fill("_");
var errores = 0;

var canvas = document.getElementById("ahorcadoCanvas");
var ctx = canvas.getContext("2d");

function dibujarBase() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    // Base y horca
    ctx.beginPath();
    ctx.moveTo(10, 140); ctx.lineTo(110, 140); // Base
    ctx.moveTo(40, 140); ctx.lineTo(40, 20); // Poste vertical
    ctx.moveTo(40, 20); ctx.lineTo(100, 20); // Viga superior
    ctx.moveTo(100, 20); ctx.lineTo(100, 40); // Soga
    ctx.stroke();
}

function dibujarMono(errorNum) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    
    switch (errorNum) {
        case 1: // Cabeza
            ctx.beginPath();
            ctx.arc(100, 55, 12, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2: // Tronco
            ctx.beginPath();
            ctx.moveTo(100, 67);
            ctx.lineTo(100, 105);
            ctx.stroke();
            break;
        case 3: // Brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(100, 75);
            ctx.lineTo(80, 95);
            ctx.stroke();
            break;
        case 4: // Brazo derecho
            ctx.beginPath();
            ctx.moveTo(100, 75);
            ctx.lineTo(120, 95);
            ctx.stroke();
            break;
        case 5: // Pierna izquierda
            ctx.beginPath();
            ctx.moveTo(100, 105);
            ctx.lineTo(85, 130);
            ctx.stroke();
            break;
        case 6: // Pierna derecha
            ctx.beginPath();
            ctx.moveTo(100, 105);
            ctx.lineTo(115, 130);
            ctx.stroke();
            break;
    }
}

function actualizar() {
    document.getElementById("palabra").innerText = progreso.join(" ");
    document.getElementById("error").innerText = "Errores: " + errores + "/6";
}

// Inicializar pantalla y base de la horca
dibujarBase();
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

    if (!ok) {
        errores++;
        dibujarMono(errores); // Dibuja la parte correspondiente al fallo
    }
    
    actualizar();

    if (!progreso.includes("_")) {
        document.getElementById("msj").innerText = "¡GANASTE!";
        desactivarTodo();
    } else if (errores >= 6) {
        document.getElementById("msj").innerText = "¡PERDISTE! Era: " + palabra;
        desactivarTodo();
    }
}

function desactivarTodo() {
    var botones = document.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);
}
