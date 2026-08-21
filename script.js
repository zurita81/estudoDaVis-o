document.addEventListener("DOMContentLoaded", () => {
    
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    let tamanhoAtualFonte = 100;

    // Função Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {  
            document.body.classList.toggle("alto-contraste");

            const ativo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", ativo);
        });
    }

    // Função Aumentar Texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    // Função Diminuir Texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 90) {
                tamanhoAtualFonte -= 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }
});