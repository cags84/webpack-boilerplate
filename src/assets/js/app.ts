import '../css/style.scss';

function saludo(mensaje:string) {
  return "Hola mundo , " + mensaje;
}

let usuario = "nube colectiva";

document.getElementById("app").textContent = saludo(usuario);