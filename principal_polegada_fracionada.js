var botaoCalcular = document.querySelector(".btn");
var x = document.querySelector(".valor1");
var y = document.querySelector(".valor2");
var z = document.querySelector(".valor3");
var polegada = document.querySelector(".polegada");
var milimetro = document.querySelector(".milimetro");

botaoCalcular.addEventListener("click", function(event) {

    event.preventDefault();

    x_int = parseInt(x.value);
    y_int = parseInt(y.value);
    z_int = parseInt(z.value);

    var mm = ((x_int * 25.4) + ((y_int / z_int) * 25.4)).toFixed(1);

    polegada.textContent = (x_int + " - " + y_int + " / " + z_int);
    milimetro.textContent = mm;

    var resultadoTr = document.createElement("tr");
    var polegadaTd = document.createElement("td");
    var milimetroTd = document.createElement("td");

    polegadaTd.textContent = (x_int + " - " + y_int + " / " + z_int);
    milimetroTd.textContent = mm;

    resultadoTr.appendChild(polegadaTd);
    resultadoTr.appendChild(milimetroTd);

    var tabela = document.querySelector(".memoria");
    tabela.appendChild(resultadoTr);


})