const navegador= document.querySelector("#navegador");
const abrir= document.querySelector("#abrir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navegador.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navegador.classList.remove("visible");
})