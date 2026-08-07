//Botões de acessibilidade
document.addEventListener("DOMContentLoaded, () => {
    
const btnContraste = document.getElementById("btn-contraste");
const btnAumentar = document.getElementById("btn-aumentar-texto");
const btnDiminuir = document.getElementById("btn-diminuir-texto")

//aumenta a fonte

let tamanhoAtualFonte = 100;

//função alto contraste

btnContraste.addEventListener("click,() =>{  
    
document.body.classList.toogle("alto-contraste");

//acessibilidade para leitores de tela

const ativo = document.body.classList.contains("alto-contrste")
btnContraste.setAttribute("aria-pressed", ativo);

)



}