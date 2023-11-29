let numeroMagico;

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  document.getElementById("juego").style.display = "block";
}

function verificarNumero() {
  const numeroIngresado = parseInt(
    document.getElementById("numeroInput").value
  );

  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numeroIngresado === numeroMagico) {
    alert("¡Felicidades! Adivinaste el número.");
    reiniciarJuego();
  } else if (numeroIngresado < numeroMagico) {
    alert(
      "El número que pusiste es más chico, no adivinaste. ¡Probá otra vez!"
    );
  } else {
    alert(
      "El número que pusiste es más grande, no adivinaste. ¡Probá otra vez!"
    );
  }
}

function reiniciarJuego() {
  document.getElementById("juego").style.display = "none";
  numeroMagico = null;
}
