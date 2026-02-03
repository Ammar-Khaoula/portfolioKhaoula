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

const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.projet');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        // bouton actif
        buttons.forEach(b => b.classList.remove('btn-primary'));
        buttons.forEach(b => b.classList.add('btn-outline-primary'));
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-primary');
    });
});

// Tableau contenant les images
const images = ["img/cahierDeCharge.png", "img/pc.png", "img/Wireframe mobile.png", "img/fonction.png", "img/bacOfice.png"];
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


/*********************Competence**************/
document.addEventListener("DOMContentLoaded", () => {

    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
    });

});
/******************contact**********************/


const contact = document.querySelector('#contact');
contact.classList.add('opacity-0');

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        contact.classList.remove('opacity-0');
        contact.classList.add('fade-in');
    }
});

observer.observe(contact);


document.addEventListener('DOMContentLoaded', function() {
    const chatBtn = document.getElementById('my-chat-btn');

    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            if (typeof Tawk_API !== 'undefined') {
                Tawk_API.toggle();
            }
        });
    }
});