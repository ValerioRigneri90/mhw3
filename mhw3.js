function showTestimonials(event)
{

    const testimonialH2=document.querySelector(".testimonial-container h2");
    const testimonialWrapper=document.querySelector(".testimonial-wrapper");
    
    const h2Display=window.getComputedStyle(testimonialH2).display;
    const wrapperDisplay=window.getComputedStyle(testimonialWrapper).display;
    
    if(wrapperDisplay=="flex" &&h2Display=="block")
    {
        testimonialH2.style.display="none";
        testimonialWrapper.style.display="none";
        button.textContent="Leggi di più";
        clearInterval(button.timer);
        button.timer = null;
    }
    else
    {
        button.textContent="Leggi di meno";
        testimonialH2.style.display="block";
        testimonialWrapper.style.display="flex";
        fakeTestimonials();
        button.timer=setInterval(fakeTestimonials,7000);
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
            
            videoBackground.src = 'video/secondo_video.mp4';
            videoBackground.autoplay = true;
            videoBackground.loop = true;
            videoBackground.muted = true;
            videoBackground.playsInline = true;
            
            header.insertBefore(videoBackground, header.firstChild);
            
            headerContent.innerHTML = `
                <div class="dreame-content">
                    <h2 class="dreame-title">Dreame X50 Ultra Complete </h2>
                    <p class="dreame-description">Rise Up, Clean Beneath</p>
                    <a href=""><button class="dreame-button">Per saperne di più</button></a>
                </div>
            `;
            
            bgButton.setAttribute('data-current-bg', '2');
        } else 
        {
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



function fakeTestimonials()
{
    const testimonials=[];

    const frasi = [
        "Il robot aspirapolvere pulisce mentre ti rilassi.",
        "Programma il tuo robot per una casa sempre pulita.",
        "Dì addio alla polvere con un clic.",
        "Pulizia automatica, senza sforzo.",
        "Il miglior amico delle case moderne.",
        "Perfetto per chi ha poco tempo.",
        "Rimuove peli di animali in un attimo.",
        "Silenzioso ma potente.",
        "Rileva e aggira gli ostacoli.",
        "Pulisce anche sotto i mobili.",
        "Il futuro della pulizia è già qui.",
        "Aspirazione intelligente su ogni superficie.",
        "Programmazione giornaliera facile e veloce.",
        "Controllabile da smartphone.",
        "Compatibile con Alexa e Google Home.",
        "La tecnologia al servizio della tua casa.",
        "Mantiene i pavimenti brillanti ogni giorno.",
        "Ideale per chi soffre di allergie.",
        "Sistema di filtraggio HEPA incluso.",
        "Mappatura intelligente degli ambienti.",
        "Riconosce tappeti e li pulisce a fondo.",
        "Dotato di sensori anticaduta.",
        "Si ricarica da solo alla base.",
        "Modalità silenziosa per le ore notturne.",
        "Risparmia tempo prezioso ogni settimana.",
        "Nessun angolo resta sporco.",
        "La soluzione perfetta per famiglie con bambini.",
        "Funziona anche mentre non sei a casa.",
        "Fai brillare il parquet senza rovinarlo.",
        "Un alleato contro la polvere invisibile.",
        "Evita fili e piccoli oggetti sul pavimento.",
        "Pulizia efficace in ambienti grandi e piccoli.",
        "Si adatta automaticamente all'altezza del tappeto.",
        "Tecnologia laser per una pulizia precisa.",
        "Ritorna alla base quando la batteria è bassa.",
        "Facile da svuotare e pulire.",
        "Un passo avanti nella domotica domestica.",
        "Rendi la tua casa smart anche nella pulizia.",
        "Batteria a lunga durata per grandi superfici.",
        "Elimina sporco, briciole e capelli con facilità.",
        "Protegge i mobili grazie ai sensori di distanza.",
        "Filtro lavabile per una manutenzione semplice.",
        "Riconosce automaticamente le stanze.",
        "Crea zone vietate tramite l'app.",
        "Aspirazione potente con basso consumo.",
        "Perfetto per case con animali domestici.",
        "Semplifica la tua routine di pulizia.",
        "Lavora in autonomia totale.",
        "Design sottile per entrare ovunque.",
        "Sistema anti-groviglio per capelli.",
        "Ruote ammortizzate per superfici delicate.",
        "Aggiornamenti software per nuove funzioni.",
        "Funzione mop per lavare i pavimenti.",
        "Rilevamento automatico del tipo di superficie.",
        "Modalità turbo per lo sporco ostinato.",
        "Non lascia residui né polvere.",
        "Compatto ma estremamente efficiente.",
        "Si sincronizza con il tuo calendario.",
        "Riconosce le aree ad alto traffico.",
        "Lavora anche su moquette spessa.",
        "Gestione intelligente della batteria.",
        "Pulisce bordi e angoli con spazzole laterali.",
        "Personalizza gli orari di pulizia.",
        "Monitoraggio in tempo reale dall'app.",
        "Facile da configurare e usare.",
        "Mantiene la casa fresca e pulita.",
        "Un robot aspirapolvere per ogni esigenza.",
        "Affidabile e durevole nel tempo.",
        "Zero fatica per pavimenti splendenti.",
        "Lavoro silenzioso per il massimo comfort.",
        "Evita tappeti delicati automaticamente.",
        "Modalità eco per risparmio energetico.",
        "Si muove agilmente in spazi stretti.",
        "Pulisce mentre tu sei al lavoro.",
        "Riduce al minimo gli allergeni domestici.",
        "Facilita la vita quotidiana.",
        "Si integra nella tua smart home.",
        "Tecnologia di navigazione avanzata.",
        "Aggira con cura i mobili fragili.",
        "Ideale anche per piccoli appartamenti.",
        "Sistema di pulizia a più fasi.",
        "Scarica automaticamente lo sporco nella base.",
        "Non lascia strisce sui pavimenti lucidi.",
        "Facile da trasportare e riporre.",
        "Controllo vocale immediato.",
        "Mantiene pulito anche sotto il letto.",
        "Sistema di evitamento ostacoli 3D.",
        "Batteria rapida da ricaricare.",
        "Sempre pronto per una nuova sessione.",
        "Elegante e moderno nel design.",
        "Pulisce anche le fughe delle piastrelle.",
        "Rispetta gli spazi senza danneggiarli.",
        "Dimentica la scopa e goditi il relax.",
        "Semplifica le pulizie settimanali.",
        "Tecnologia multisensore per una pulizia completa.",
        "Non teme peli e polvere nascosta.",
        "Un robot aspirapolvere migliora la qualità della vita."
      ];
    
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    
.then(json =>
{
    const testimonialWrapper=document.querySelector(".testimonial-wrapper");
    testimonialWrapper.innerHTML="";

    for(user of json.results)
    {
        let randomIndex=Math.floor(Math.random()*frasi.length);
        let fraseScelta=frasi.splice(randomIndex,1)[0];
        let testimonial={
          name: user.name.first +" "+user.name.last,
          image:user.picture.large,
          frase:fraseScelta
        };
        testimonials.push(testimonial);
    }
    for(let i of testimonials)
    {
        const newDiv=document.createElement("div");
        newDiv.classList.add("testimonial-card");
        newDiv.innerHTML=  ' <img src="'+i.image +'" alt="Testimonial">' +
        '<h3>'+i.name+'</h3>' +
        '<p>'+i.frase+'</p>' +          
        '<div class="stars">★★★★½</div>';     
        testimonialWrapper.appendChild(newDiv);
    }
});
}

const element=document.querySelector("#open-support");
element.addEventListener("click",assistanceCustomers);



function assistanceCustomers(event){
   event.preventDefault();

   const temp=event.currentTarget;
 
    const support=document.querySelector("#support-modal");
    support.classList.add("show");

    const supportModal=document.querySelector("#support-modal .close");
    supportModal.addEventListener("click",function(event){
        support.classList.remove("show");
    });

    const supportForm=document.querySelector("#support-form");
    supportForm.addEventListener("submit",function(event){
        event.preventDefault();
        const form=new FormData(event.target);

        const data=
        {
            nome:form.get("name"),
            cognome:form.get("surname"),
            email:form.get("email"),
            serial:form.get("serial"),
            messaggio:form.get("message"),
        };

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data),
        })
        .then(() => {
            const request=document.querySelector("#support-response");
            request.classList.add("request");
            request.textContent="Richiesta inviata con successo!";
            event.target.reset();
            
            setTimeout(() => {
                request.textContent = "";
                request.classList.remove("request");
            }, 3000);
        })
        .catch(() => {
            const request=document.querySelector("#support-response");
            request.classList.add("request");
            request.textContent="Errore durante l'invio della richiesta";
        
            setTimeout(() => {
                request.textContent = "";
                request.classList.remove("request");
            }, 3000);
        });
    });
}
