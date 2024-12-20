let txtAnim = document.querySelector('.long');

new Typewriter(txtAnim, {
        loop: true,
        deleteSpeed: 20
    })
    .changeDelay(70)
    //.typeString('Notre Entreprise propose les équipemets pour industrie dans les domaines des: <br/>')
    //.pauseFor(500)
    .typeString('<span> HTML5</span>')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('<span> CSS3 </span>')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('<span> Javascript </span>')
    .pauseFor(2000)
    .deleteChars(20)
    .typeString('<span> VueJs </span>')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('<span> Wordpress </span>')
    .pauseFor(2000)
    .deleteChars(20)
    .typeString('<span> PHP </span>')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('<span> Symfony </span>')
    .pauseFor(2000)
    .deleteChars(20)
    .typeString('<span > ... </span>')
    .pauseFor(2000)
    .deleteChars(5)
    .start()

// Tableau contenant les images
const images = ["pictures/img.png", "pictures/pc.png", "pictures/Wireframe mobile.png", "pictures/fonction.png", "pictures/bacOfice.png"];
let currentIndex = 0;

// Sélection des éléments HTML
const sliderImg = document.getElementById("slider-img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Fonction pour mettre à jour l'image affichée
function updateImage() {
    sliderImg.src = images[currentIndex];
}

// Événement pour le bouton "Précédent"
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Événement pour le bouton "Suivant"
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialisation avec la première image
updateImage();

/*const allLettre = document.querySelectorAll('.bloc span');

const animLettre = gsap.timeline();

animLettre
    .from(allLettre, { opacity:0, top: gsap.utils.wrap([100, -100]), stagger: 0.1, ease: "power2.out" });

const lireLeSuite = document.createElement("a");
const lesParagraphe = document.querySelectorAll(".presentation")

lireLeSuite.setAttribute("href", "#paragraphe1")
lireLeSuite.setAttribute("class", "lien")

lireLeSuite.innerHTML = "afficher la suite"
lesParagraphe[0].appendChild(lireLeSuite);

function cacheTexte() {
    for (let i = 0; i < lesParagraphe.length; i++) {
        if (i === 0) {
            continue;
        } else if (i > 0) {
            lesParagraphe[i].style.display = "none";
        }
    }
};


function afficheText() {
    for (let i = 0; i < lesParagraphe.length; i++) {
        lesParagraphe[i].style.display = "block";
        lireLeSuite.remove();
        //ou this.remove();
    }
}

cacheTexte();
lireLeSuite.addEventListener("click", afficheText);*/