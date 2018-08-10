var botaoCalcular = document.querySelector(".btn");
var w = document.querySelector(".valor0");
var x = document.querySelector(".valor1");
var y = document.querySelector(".valor2");
var z = document.querySelector(".valor3");
var pes = document.querySelector(".pes");
var milimetro = document.querySelector(".milimetro");

botaoCalcular.addEventListener("click", function(event) {

    event.preventDefault();

    w_int = parseInt(w.value);
    x_int = parseInt(x.value);
    y_int = parseInt(y.value);
    z_int = parseInt(z.value);

    var mm = ((w_int * 304.8) + (x_int * 25.4) + ((y_int / z_int) * 25.4)).toFixed(1);

    pes.textContent = (w_int + "' " + x_int + " - " + y_int + " / " + z_int);
    milimetro.textContent = mm;

    var resultadoTr = document.createElement("tr");
    var pesTd = document.createElement("td");
    var milimetroTd = document.createElement("td");

    pesTd.textContent = (w_int + "' " + x_int + " - " + y_int + " / " + z_int);
    milimetroTd.textContent = mm;

    resultadoTr.appendChild(pesTd);
    resultadoTr.appendChild(milimetroTd);

    var tabela = document.querySelector(".memoria");
    tabela.appendChild(resultadoTr);

})