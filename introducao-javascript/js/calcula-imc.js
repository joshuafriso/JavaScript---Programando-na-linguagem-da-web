var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
//Tras somente um resultado
//var paciente = document.querySelector("#primeiro-paciente");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var alturaEhValida = validaAltura(altura);
  var pesoEhValido = validaPeso(peso);

  if(!pesoEhValido){
      console.log("Peso inválida");
      tdImc.textContent = "Peso inválida!";
      paciente.classList.add("paciente-invalido"); //paciente-invalido é uma classe do css para estilisar algo na página
      pesoEhValido = false;
  }

  if(!alturaEhValida){
      console.log("Altura inválida");
      tdImc.textContent = "Altura inválida!";
      paciente.classList.add("paciente-invalido"); //paciente-invalido é uma classe do css para estilisar algo na página
      alturaEhValida = false;
  }

  if(pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso,altura);
      tdImc.textContent = imc; //função toFixed limita a quantidade de casas decimais
  }
}
function validaPeso(peso){
  if(peso > 0 && peso <= 1000){
      return true;
  }
  return false;
}
function validaAltura(altura){
  if (altura > 0 && altura <= 3.0) {
    return true;
  }
  return false;
}
function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / ( altura * altura);

  return imc.toFixed(2);
}
