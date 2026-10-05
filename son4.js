function calcular() {

let a = Number(document.getElementById("ancho").value);
let resultado;


if (a < 576){
resultado = "xs";
}
else if(a < 768){
resultado = "sm";
}
else if(a < 962){
resultado = "md";
}
else if(a < 1200){
resultado = "xl";
} else {
resultado = "xxl";
}

document.getElementById("mensaje").innerText =
"la pantalla es: " + resultado;
}