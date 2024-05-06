//nav
//funzione quando cursore si mette su un link del nav , seleziona solo il menu a comparsa di quel link del nav
function comparsaMenu(event) {
    const linkMenu = event.target;
    const comparsaCorrispondente = linkMenu.nextElementSibling;
    if (comparsaCorrispondente.classList.contains('nav-comparsa')) {
        const menuComparsa = document.querySelectorAll('.nav-comparsa');
        for (let i = 0; i < menuComparsa.length; i++) {
            menuComparsa[i].style.display = 'none';
        }
        comparsaCorrispondente.style.display = 'block';
    }
}

//Funzione quando cursore si toglie da un link del nav o dal menu a comparsa 
function uscitaMenu(event) {
    const target = event.target;
    if (!target.classList.contains('nav-comparsa')) {
        const menuComparsa = document.querySelectorAll('.nav-comparsa');
        for (let i = 0; i < menuComparsa.length; i++) {
            menuComparsa[i].style.display = 'none';
        }
    }
}

const navLinks = document.querySelectorAll('#link_nav > a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseenter', comparsaMenu);
}

//aggiungo la funzione pure ai link del nav e non solo ai menu
document.querySelector('#link_nav').addEventListener('mouseleave', uscitaMenu);

const comparsaElements = document.querySelectorAll('.nav-comparsa');
for (let i = 0; i < comparsaElements.length; i++) {
    comparsaElements[i].addEventListener('mouseleave', uscitaMenu);
}






//section1

//riquadro 1
let img_riquadro1 = document.getElementById('img_riquadro1');

function img_riquadro1_mouseover(event){
    const nuovoSrc = img_riquadro1.getAttribute('data-nuovo-src');
    img_riquadro1.src = nuovoSrc;
    img_riquadro1.classList.add('img_mouseover');
} 

function img_riquadro1_mouseout(event){
   const vecchioSrc = img_riquadro1.getAttribute('data-src');
   img_riquadro1.src = vecchioSrc;
   img_riquadro1.classList.remove('img_mouseover');
}

img_riquadro1.addEventListener('mouseover', img_riquadro1_mouseover);
img_riquadro1.addEventListener('mouseout', img_riquadro1_mouseout);

//riquadro2
function img_riquadro2_mouseover(event)
{
    const new_img = document.createElement('img');
    new_img.src = '\\img\\toy2.jpeg';
  
    new_img.classList.add('img_mouseover');

    const container = document.querySelector('#container_riquadro2');
    container.innerHTML = '';
    container.appendChild(new_img);
}

const img_riquadro2 = document.querySelector('#img_riquadro2');
img_riquadro2.addEventListener('mouseover', img_riquadro2_mouseover);

//riquadro3
function mostra_img_riquadro3(event){
    const image = event.currentTarget;
    image.removeEventListener('click', mostra_img_riquadro3);

    const img_riquadro3 = document.querySelector('#img_riquadro3');
    const newimg_riquadro3 = document.querySelector('#newimg_riquadro3');
    img_riquadro3.classList.add('hidden');
    newimg_riquadro3.classList.remove('hidden');
}

const img_riquadro3 = document.querySelector('#img_riquadro3');
img_riquadro3.addEventListener('click', mostra_img_riquadro3);

//riquadro4
function mostra_img_riquadro4(event){
    const image = event.currentTarget;
    image.removeEventListener('click', mostra_img_riquadro4);

    const img_riquadro4 = document.querySelector('#img_riquadro4');
    const newimg_riquadro4 = document.querySelector('#newimg_riquadro4');
    img_riquadro4.classList.add('hidden');
    newimg_riquadro4.classList.remove('hidden');
}

const img_riquadro4 = document.querySelector('#img_riquadro4');
img_riquadro4.addEventListener('click', mostra_img_riquadro4);




//section 4 data
function dataClick(event) {
    const target = event.currentTarget;
    const tipo = target.getAttribute('data-tipo');
    alert('Tipo di dato cliccato: ' + tipo);
}

const containers = document.querySelectorAll('.Section4_riquadri_container');

for (const container of containers) {
    container.addEventListener('click', dataClick);
}


//section 5 classe preferiti stella
function preferitoClick(event) {
    if (event.target.classList.contains('stella_vuota')) {
        const elementoPadre = event.target.parentElement.querySelector('.Section5_item_a'); 
        elementoPadre.classList.toggle('bordoSection5');
    }
}
  
document.addEventListener('click', preferitoClick);
  
let stelle = document.querySelectorAll('.stella_vuota');

function toggleStella(event) {
    const stella = event.target;
    if (stella.classList.contains('stella_piena')) {
        stella.src = stella.getAttribute('data-src');
        stella.classList.remove('stella_piena');
    } else {
        stella.src = stella.getAttribute('data-nuovo-src');
        stella.classList.add('stella_piena');
    }
}

for (let i = 0; i < stelle.length; i++) {
    stelle[i].addEventListener('click', toggleStella);
}










