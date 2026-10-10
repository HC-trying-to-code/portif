function formatarTelefone() {
    var tel = document.getElementById("telefone").value;
    var tel_forma = document.getElementById("telefone").value;
    
    if (tel_forma[0] != "+") {
        if (tel_forma[0] != undefined) {
            document.getElementById("telefone").value = "+55" + tel_forma[0];
        }
    }
    if (tel_forma[3] != "(") {
        if (tel_forma[3] != undefined) {
            document.getElementById("telefone").value = tel_forma.slice(0, 3) + "(" + tel_forma[3];
        }
    }
    if (tel_forma[6] != ")") {
        if (tel_forma[6] != undefined) {
            document.getElementById("telefone").value = tel_forma.slice(0, 6) + ")" + tel_forma[6];
        }
    }
    if (tel_forma[12] != "-") {
        if (tel_forma[12] != undefined) {
            document.getElementById("telefone").value = tel_forma.slice(0, 12) + "-" + tel_forma[12];
        }
    }
}

const elementos = document.querySelectorAll(
    ".tit-sec, .c-sobre, .c-proj, .cont"
);

elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
});

const ver = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");

            // n lembro
            ver.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    ver.observe(elemento);
});


const checkBTema = document.getElementById("btn-tema");

// tema voltar
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    checkboxTema.checked = true;
    document.body.classList.add("modo-claro");
}

checkBTema.addEventListener("change", () => {
    const modoClaro = checkBTema.checked;

    document.body.classList.toggle("modo-claro", modoClaro);

    localStorage.setItem(
        "tema",
        modoClaro ? "claro" : "escuro"
    );
});