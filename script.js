
let numero;
while(true) {
    numero = parseFloat(prompt("Vamos a calcular la factorial, ingresa un número: "))
    if (!isNaN(numero)) {
        break;
    }else{
        alert("Por favor, ingresa un número entero no negativo válido");
    }
}
function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  let resultado = factorialize(numero)
  console.log("La factorial del número que elegiste es: ", resultado)

  document.getElementById("result").textContent = "La factorial del número que elegiste es: " + resultado;