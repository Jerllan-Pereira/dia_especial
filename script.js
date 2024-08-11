let slideIndex = 0;

function mostrarSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    slides[slideIndex - 1].classList.add('ativo');
}

function mudarImagem(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    } 
    if (slideIndex < 1) { 
        slideIndex = slides.length; 
    }
    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });
    slides[slideIndex - 1].classList.add('ativo');
}

function mostrarMensagem() {
    let mensagemDiv = document.getElementById('mensagemEspecial');
    mensagemDiv.innerHTML = 'Pai, você sempre foi uma fonte de inspiração e amor. Neste Dia dos Pais, quero te lembrar o quanto você é especial e o quanto eu sou grato por tudo que fez e faz por mim. Feliz Dia dos Pais!';
    mensagemDiv.style.display = 'block'; // Mostrar a mensagem
}

mostrarSlides();
setInterval(mostrarSlides, 5000);
