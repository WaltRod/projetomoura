const card = document.querySelector('.card');
const container = document.querySelector(".container");

const gallerycard = document.querySelector(".gallerycard");

const gallerytext = document.querySelector(".gallerytext");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth /2 - e.pageX) /25;
    let yAxis = (window.innerHeight /2 - e.pageY) /25;
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    gallerycard.style.transform = "translateZ(150px)";
    gallerytext.style.transform = "translateZ(125px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    gallerycard.style.transform = "translateZ(0px)";
    gallerytext.style.transform = "translateZ(0px)";
})



const target = document.querySelectorAll('[animation]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 4);
    target.forEach(function(element) {
       if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
       } else {
          element.classList.remove(animationClass);
       }
    })
 }
 
 animeScroll();
 
 window.addEventListener('scroll', function(){
    animeScroll();
 })