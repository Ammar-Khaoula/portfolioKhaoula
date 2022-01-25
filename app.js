/*const allLettre = document.querySelectorAll('.bloc span');

const animLettre = gsap.timeline();

animLettre
    .from(allLettre, { opacity:0, top: gsap.utils.wrap([100, -100]), stagger: 0.1, ease: "power2.out" });*/

    const lireLeSuite = document.createElement("a");
    const lesParagraphe = document.querySelectorAll(".presentation")
    
    lireLeSuite.setAttribute("href", "#paragraphe1")
    lireLeSuite.setAttribute("class", "lien")
    
    lireLeSuite.innerHTML= "afficher la suite"
    lesParagraphe[0].appendChild(lireLeSuite);
    
    function cacheTexte() {
        for (let i = 0; i < lesParagraphe.length; i++){
            if (i === 0) {
                continue;
            } else if (i > 0) {
                lesParagraphe[i].style.display = "none";
            }       
        }
    };
    
    
    function afficheText() {
        for (let i = 0; i < lesParagraphe.length; i++){
            lesParagraphe[i].style.display = "block";
            lireLeSuite.remove();
            //ou this.remove();
        }
    }
    
    cacheTexte();
    lireLeSuite.addEventListener("click", afficheText);