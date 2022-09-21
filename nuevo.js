var contador = document.getElementById("contar");
var sumar = document.getElementById("incre");
var restar = document.getElementById("dism");
var reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;

    if (numero==0) {
        document.getElementById("contar").style.color = "blue";
    } else if(numero>0){
        document.getElementById("contar").style.color = "green";
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;

    document.getElementById("contar").style.color = "blue";
  
});
restar.addEventListener("click", ()=>{
    numero=numero-1;
    contador.innerHTML = numero;

    if (numero==0) {
        document.getElementById("contar").style.color = "blue";
    } else if(numero<0){
        document.getElementById("contar").style.color = "red";
    }
});
