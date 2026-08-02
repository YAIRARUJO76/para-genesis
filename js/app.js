const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0;

function fadeInMusic(){

    let volumen = 0;

    fadeInMusic();

    const intervalo = setInterval(()=>{

        volumen += 0.02;

        if(volumen >= 0.35){

            volumen = 0.35;

            clearInterval(intervalo);

        }

        bgMusic.volume = volumen;

    },200);

}

startBtn.addEventListener("click", () => {

    const music = document.getElementById("bgMusic");
music.volume = 1;
music.play().catch(console.error);

    bgMusic.play().catch(()=>{});

    cambiar(scene1, scene2);

    escribirTitulo();

    setTimeout(() => {

        escribirTexto();

    }, 1800);

    crearEstrellas();

    setTimeout(() => {

        cambiar(scene2, scene3);

    }, 20000);

    setTimeout(() => {

        cambiar(scene3, scene4);

    }, 20000);

});

function cambiar(actual, siguiente){

    actual.classList.remove("active");
    actual.classList.add("hidden");

    siguiente.classList.remove("hidden");
    siguiente.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function escribirTitulo(){

    const titulo = "Encontré una estrella...";

    const h2 = document.getElementById("loveTitle");

    h2.innerHTML = "";

    let i = 0;

    const timer = setInterval(()=>{

        h2.innerHTML += titulo.charAt(i);

        i++;

        if(i >= titulo.length){

            clearInterval(timer);

        }

    },70);

}

function escribirTexto(){

    const texto = "Y esa estrella eras tú. Desde que llegaste a mi vida todo comenzó a tener mucho más sentido. ❤️";

    const p = document.getElementById("loveText");

    p.innerHTML = "";

    let i = 0;

    const timer = setInterval(()=>{

        p.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(timer);

        }

    },35);

}

function crearEstrellas(){

    const particles = document.querySelector(".particles");

    particles.innerHTML = "";

    for(let i=0;i<25;i++){

        const estrella = document.createElement("span");

        estrella.className = "particle";

        estrella.style.left = Math.random()*100+"%";

        estrella.style.top = Math.random()*100+"%";

        particles.appendChild(estrella);

    }
}
    

const goLetter = document.getElementById("goLetter");

goLetter.addEventListener("click",()=>{

    cambiar(scene4,scene5);

});

const openLetter = document.getElementById("openLetter");
const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const carta = `Feliz Día de la Novia ❤️

Quiero darte las gracias por ser tan hermosa conmigo, por hacerme conocer una versión de mí que ni yo mismo conocía.

Gracias por hacerme sentir importante en tu vida. Se siente tan bonito vivir todo esto contigo: cuando me hablas con esa voz tan hermosa que tienes, o incluso cuando intentas enojarte. Cada pequeño momento a tu lado significa muchísimo para mí.

A pesar de que ya no estamos como antes, cuando compartíamos más tiempo, hablábamos durante horas y estábamos más pendientes el uno del otro, nuestro amor nunca se ha ido. Al contrario, siento que ha crecido aún más. Solo espero que podamos volver a compartir, reír y divertirnos juntos como antes, porque esos momentos son de los más felices de mi vida.

También quiero decirte algo que llevo en el corazón. A veces siento que he tenido parte de la culpa de que hayamos dejado de compartir tanto o de hablar como antes. Sé que debo esforzarme más. Además, entiendo que te hice desconfiar de mí cuando me compraron mi cuenta y no te conté nada. Sé que estuvo mal guardármelo y entiendo por qué te hizo sentir así.

Pero créeme cuando te digo que nunca he tenido malas intenciones. Jamás quise hacer algo que te lastimara o que pusiera en riesgo lo nuestro. De hecho, era todo lo contrario: siempre me ha gustado darte sorpresas para hacerte feliz, y todavía me sigue gustando hacerlo.

Si pudiera, te bajaría la luna, pero como no puedo llegar hasta ella, lo único que puedo hacer es entregarte todo mi corazón. Quiero apoyarte, motivarte y acompañarte en todo lo que pueda. Así que, si alguna vez pensaste que tuve malas intenciones contigo, quiero que sepas que nunca fue así. Yo de verdad te amo. Me haces sentir una confianza que nunca había sentido con nadie, y eres la persona con la que quiero compartir mi vida.

Gracias por ser la mejor novia del mundo. Te deseo un Día de la Novia lleno de felicidad y de momentos hermosos. Nunca olvides que tienes a alguien que te ama profundamente y que haría cualquier cosa por verte sonreír.

Gracias por todo: por la confianza que me has brindado, por el apoyo que siempre me das y por serme fiel a pesar de la distancia.

Te amo con todo mi corazón, hoy, mañana y siempre. ❤️`


let intervaloCarta;

openLetter.addEventListener("click",()=>{

    if(envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    escribirCarta();

});

function escribirCarta(){

    clearInterval(intervaloCarta);

    letterText.innerHTML="";

    let i=0;

    intervaloCarta=setInterval(()=>{

        letterText.innerHTML+=carta.charAt(i);

        i++;

        if(i>=carta.length){

            clearInterval(intervaloCarta);

            document.getElementById("goCounter").style.display="inline-block";

        }

    },35);

}
const goCounter=document.getElementById("goCounter");

goCounter.addEventListener("click",()=>{

    cambiar(scene5,scene6);

});

const inicio=new Date("2025-12-26T03:00:00");

function actualizarContador(){

    const ahora=new Date();

    const diferencia=ahora-inicio;

    const dias=Math.floor(diferencia/(1000*60*60*24));

    const horas=Math.floor((diferencia/(1000*60*60))%24);

    const minutos=Math.floor((diferencia/(1000*60))%60);

    const segundos=Math.floor((diferencia/1000)%60);

    document.getElementById("days").textContent=dias;
    document.getElementById("hours").textContent=horas;
    document.getElementById("minutes").textContent=minutos;
    document.getElementById("seconds").textContent=segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();
const scene7 = document.getElementById("scene7");

const goSignature = document.getElementById("goSignature");

goSignature.addEventListener("click",()=>{

    cambiar(scene6,scene7);

});
const canvas = document.getElementById("signaturePad");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#111";
ctx.lineWidth = 3;
ctx.lineCap = "round";

let dibujando = false;

canvas.addEventListener("mousedown",iniciar);
canvas.addEventListener("mousemove",dibujar);
canvas.addEventListener("mouseup",detener);
canvas.addEventListener("mouseleave",detener);

canvas.addEventListener("touchstart",iniciarTouch,{passive:false});
canvas.addEventListener("touchmove",dibujarTouch,{passive:false});
canvas.addEventListener("touchend",detenerTouch);

function iniciar(e){

    dibujando = true;

    ctx.beginPath();

    ctx.moveTo(e.offsetX,e.offsetY);

}

function dibujar(e){

    if(!dibujando) return;

    ctx.lineTo(e.offsetX,e.offsetY);

    ctx.stroke();

}

function detener(){

    dibujando = false;

}

function iniciarTouch(e){

    e.preventDefault();

    const rect = canvas.getBoundingClientRect();

    const t = e.touches[0];

    dibujando = true;

    ctx.beginPath();

    ctx.moveTo(
        t.clientX-rect.left,
        t.clientY-rect.top
    );

}

function dibujarTouch(e){

    e.preventDefault();

    if(!dibujando) return;

    const rect = canvas.getBoundingClientRect();

    const t = e.touches[0];

    ctx.lineTo(
        t.clientX-rect.left,
        t.clientY-rect.top
    );

    ctx.stroke();

}

function detener(){

    dibujando = false;

}

function detenerTouch(){

    dibujando = false;

}

const saveSignature = document.getElementById("saveSignature");

saveSignature.addEventListener("click",()=>{

    lanzarCorazones();

    lanzarPetalos();

    lanzarFuegos();

    document
        .getElementById("finalMessage")
        .classList.add("show");

});

document.getElementById("clearSignature").addEventListener("click",()=>{

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();

});

function lanzarCorazones(){

    for(let i=0;i<40;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="heart";

            heart.innerHTML="❤️";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(20+Math.random()*35)+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },6000);

        },i*150);

    }

}
function lanzarPetalos(){

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            const petalo=document.createElement("div");

            petalo.className="petal";

            petalo.innerHTML="🌸";

            petalo.style.left=Math.random()*100+"vw";

            petalo.style.fontSize=(18+Math.random()*20)+"px";

            petalo.style.animationDuration=(6+Math.random()*5)+"s";

            document.body.appendChild(petalo);

            setTimeout(()=>{

                petalo.remove();

            },11000);

        },i*120);

    }

}
function lanzarFuegos(){

    for(let e=0;e<6;e++){

        setTimeout(()=>{

            const centroX=Math.random()*window.innerWidth;
            const centroY=Math.random()*window.innerHeight*0.6+80;

            for(let i=0;i<40;i++){

                const p=document.createElement("div");

                p.className="firework";

                p.style.left=centroX+"px";
                p.style.top=centroY+"px";

                const angulo=Math.random()*Math.PI*2;
                const distancia=60+Math.random()*90;

                p.style.setProperty("--x",
                    Math.cos(angulo)*distancia+"px");

                p.style.setProperty("--y",
                    Math.sin(angulo)*distancia+"px");

                const colores=[
                    "#ff4d88",
                    "#ffd700",
                    "#7df9ff",
                    "#ffffff",
                    "#ff66cc",
                    "#ff9966"
                ];

                p.style.background=
                    colores[Math.floor(Math.random()*colores.length)];

                document.body.appendChild(p);

                setTimeout(()=>{

                    p.remove();

                },900);

            }

        },e*700);

    }

}