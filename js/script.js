
const faixa = document.querySelector(".carrosel-faixa");
const slides = document.querySelectorAll(".slide");
const anterior = document.querySelector(".seta.anterior");
const proxima = document.querySelector(".seta.proxima");

let indiceAtual = 0;
let temporizador;

function mostrarSlide() {
    faixa.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide();
}

function slideAnterior() {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    mostrarSlide();
}

// Troca ao clicar nas setas
proxima.addEventListener("click", () => {
    proximoSlide();
    reiniciarAutomatico();
});

anterior.addEventListener("click", () => {
    slideAnterior();
    reiniciarAutomatico();
});

// Troca automática a cada 5 segundos
function iniciarAutomatico() {
    temporizador = setInterval(proximoSlide, 5000);
}

// Reinicia a contagem após um clique
function reiniciarAutomatico() {
    clearInterval(temporizador);
    iniciarAutomatico();
}

mostrarSlide();
iniciarAutomatico();
