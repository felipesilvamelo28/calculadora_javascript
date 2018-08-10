var botaoCalcular = document.querySelector(".btn");
var x = document.querySelector(".valor1");
var y = document.querySelector(".valor2");
var pes = document.querySelector(".pes");
var milimetro = document.querySelector(".milimetro");


botaoCalcular.addEventListener("click", function(event) {
    event.preventDefault();

    var x_int = parseInt(x.value);
    var y_int = parseInt(y.value);

    var mm = ((x_int * 304.8) + (y_int * 25.4)).toFixed(1);


    pes.textContent = (x_int + "' " + y_int);
    milimetro.textContent = mm;

    var resultadoTr = document.createElement("tr");
    var pesTd = document.createElement("td");
    var milimetroTd = document.createElement("td");

    pesTd.textContent = (x_int + "' " + y_int);
    milimetroTd.textContent = mm;

    resultadoTr.appendChild(pesTd);
    resultadoTr.appendChild(milimetroTd);

    var tabela = document.querySelector(".memoria");
    tabela.appendChild(resultadoTr);


})