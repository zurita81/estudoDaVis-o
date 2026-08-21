document.addEventListener("DOMContentLoaded", () => {
    
    // Controles de Acessibilidade
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

    // Barra de Progresso de Leitura e Botão Voltar ao Topo
    const barra = document.getElementById("barra-progresso");
    const btnTopo = document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {
        // Atualiza a barra vermelha no topo
        if (barra) {
            const totalAltura = document.documentElement.scrollHeight - window.innerHeight;
            const progresso = (window.scrollY / totalAltura) * 100;
            barra.style.width = `${progresso}%`;
        }

        // Exibe o botão de voltar ao topo após rolar 300px
        if (btnTopo) {
            if (window.scrollY > 300) {
                btnTopo.style.display = "block";
            } else {
                btnTopo.style.display = "none";
            }
        }
    });

    // Ação de Voltar ao Topo
    if (btnTopo) {
        btnTopo.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});