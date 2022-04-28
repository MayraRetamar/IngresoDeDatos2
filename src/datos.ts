let btnEnv = document.getElementById("btnEnv");
let primerNumero : number = Number(dato1.value);
let segundoNumero : number = Number(dato2.value);
let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click", () => {
  // TU VODIGO VA AQUI
  console.log("El primer numero es ", primerNumero);
  console.log("El segundo numero es ", segundoNumero)
});

rotulo1.innerHTML = "Ingrese el primer número::";
rotulo2.innerHTML = "Ingrese el segundo número:";
.