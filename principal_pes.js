var botaoCalcular = document.querySelector(".btn");
var x = document.querySelector(".valor");
var pes = document.querySelector(".pes");
var milimetro = document.querySelector(".milimetro");


botaoCalcular.addEventListener("click", function(event) {
    event.preventDefault();

    var x_int = parseInt(x.value);

    var mm = (x_int * 304.8).toFixed(1);


    pes.textContent = x_int;
    milimetro.textContent = mm;

    var resultadoTr = document.createElement("tr");
    var pesTd = document.createElement("td");
    var milimetroTd = document.createElement("td");

    pesTd.textContent = x_int;
    milimetroTd.textContent = mm;

    resultadoTr.appendChild(pesTd);
    resultadoTr.appendChild(milimetroTd);

    var tabela = document.querySelector(".memoria");
    tabela.appendChild(resultadoTr);


})