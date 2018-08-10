var botaoCalcular = document.querySelector(".btn");
var x = document.querySelector(".valor");
var polegada = document.querySelector(".polegada");
var milimetro = document.querySelector(".milimetro");


botaoCalcular.addEventListener("click", function(event) {
    event.preventDefault();

    var x_int = parseInt(x.value);

    var mm = (x_int * 25.4).toFixed(1);


    polegada.textContent = x_int;
    milimetro.textContent = mm;

    var resultadoTr = document.createElement("tr");
    var polegadaTd = document.createElement("td");
    var milimetroTd = document.createElement("td");

    polegadaTd.textContent = x_int;
    milimetroTd.textContent = mm;

    resultadoTr.appendChild(polegadaTd);
    resultadoTr.appendChild(milimetroTd);

    var tabela = document.querySelector(".memoria");
    tabela.appendChild(resultadoTr);


})