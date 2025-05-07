function showTestimonials(event) {
    const button=event.target
    const testimonialH2=document.querySelector(".testimonial-container h2");
    const testimonialWrapper=document.querySelector(".testimonial-wrapper");
    
    const h2Display=window.getComputedStyle(testimonialH2).display;
    const wrapperDisplay=window.getComputedStyle(testimonialWrapper).display;

    if(wrapperDisplay=="flex" &&h2Display=="block") {
        testimonialH2.style.display="none";
        testimonialWrapper.style.display="none";
        button.textContent="Leggi di più";
    } else {
        testimonialH2.style.display="block";
        testimonialWrapper.style.display="flex";
        button.textContent="Mostra meno"
    }
}

const button=document.querySelector(".testimonial-container button");
button.addEventListener("click",showTestimonials);

function createBackgroundChanger() {
    const bgButton = document.createElement('button');
    
    bgButton.classList.add('bg-change-button');
    
    bgButton.setAttribute('data-current-bg', '1');
    
    bgButton.addEventListener('click', function() {
        const header = document.querySelector('header');
        const headerContent = header.querySelector('div');
        
        const currentBg = bgButton.getAttribute('data-current-bg');
        
        if (currentBg === '1') {
            header.style.backgroundImage = 'none';
            
            const videoBackground = document.createElement('video');
            videoBackground.classList.add('video-background');
            
            videoBackground.src = 'video/primo_video.mp4';
            videoBackground.autoplay = true;
            videoBackground.loop = true;
            videoBackground.muted = true;
            videoBackground.playsInline = true;
            
            header.insertBefore(videoBackground, header.firstChild);
            
            headerContent.innerHTML = `
                <div class="dreame-content">
                    <h2 class="dreame-title">Dreame Robot Piscina Z1 ProZ1</h2>
                    <p class="dreame-subtitle">Aspirapolvere Lavapavimenti</p>
                    <p class="dreame-description">Pulizia completa con un solo passaggio</p>
                    <a href=""><button class="dreame-button">Scopri Ora</button></a>
                </div>
            `;
            
            bgButton.setAttribute('data-current-bg', '2');
        } else {
            const videoBackground = header.querySelector('.video-background');
            if (videoBackground) {
                header.removeChild(videoBackground);
            }
            
            header.style.backgroundImage = "url('immagini/header.png')";
            
            headerContent.innerHTML = `
                <h2>Offerte di Pasqua</h2>
                <p>Fino al <strong>300€</strong> di sconto</p>
                <p class="period">Periodo: <b>02 Aprile-25 Aprile</b></p>
                <a href=""><button>Compra Ora</button></a>
            `;
            
            bgButton.setAttribute('data-current-bg', '1');
        }
        
        bgButton.classList.toggle('active');
    });
    
    return bgButton;
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(".testimonial-container button");
    button.addEventListener("click", showTestimonials);
    
    const bgButton = createBackgroundChanger();
    const header = document.querySelector('header');
    header.appendChild(bgButton);
});
