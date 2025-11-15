const ul =document.getElementById("travel")
const li =document.getElementById("azerbaijan")
ul.addEventListener("click",()=>{
     li.style.opacity = "1";
     liTwo.style.opacity = "0";
     liThree.style.opacity = "0";
     liFour.style.opacity = "0";
     liFive.style.opacity = "0";
})


const ultwo =document.getElementById("traveltwo")
const liTwo =document.getElementById("where")
ultwo.addEventListener("click",()=>{
    li.style.opacity = "0";
    liTwo.style.opacity = "1";
    liThree.style.opacity = "0";
    liFour.style.opacity = "0";
    liFive.style.opacity = "0";
})


const ulThree = document.getElementById("travelthree")
const liThree = document.getElementById("what")
ulThree.addEventListener("click",()=>{
    li.style.opacity = "0";
    liTwo.style.opacity = "0";
    liThree.style.opacity = "1";
    liFour.style.opacity = "0";
    liFive.style.opacity = "0";
})


const ulFour = document.getElementById("travelfour")
const liFour = document.getElementById("event")
ulFour.addEventListener("click",()=>{
    li.style.opacity = "0";
    liTwo.style.opacity = "0";
    liThree.style.opacity = "0";
    liFour.style.opacity = "1";
    liFive.style.opacity = "0";
})


const ulFive = document.getElementById("travelfive")
const liFive = document.getElementById("how")
ulFive.addEventListener("click",()=>{
    li.style.opacity = "0";
    liTwo.style.opacity = "0";
    liThree.style.opacity = "0";
    liFour.style.opacity = "0";
    liFive.style.opacity = "1";
})





const hoverImg = document.getElementById("hoverimg")
const hoverImgTwo = document.getElementById("hoverimgtwo")
const hoverImgThree = document.getElementById("hoverimgthree")
const hoverImgFour = document.getElementById("hoverimgfour")

const north = document.getElementById("north")
const northwestern = document.getElementById("northwestern")
const westernroute = document.getElementById("westernroute")
const southernroute = document.getElementById("southernroute")

north.addEventListener("click",()=>{
    hoverImg.style.opacity = "1"
    hoverImgTwo.style.opacity = "0";
    hoverImgThree.style.opacity = "0"
    hoverImgFour.style.opacity = "0"
})
northwestern.addEventListener("click",()=>{
    hoverImg.style.opacity = "0"
    hoverImgTwo.style.opacity = "1";
    hoverImgThree.style.opacity = "0"
    hoverImgFour.style.opacity = "0"
})
westernroute.addEventListener("click",()=>{
    hoverImgTwo.style.opacity = "0";
    hoverImg.style.opacity = "0"
    hoverImgThree.style.opacity = "1"
    hoverImgFour.style.opacity = "0"
})
southernroute.addEventListener("click",()=>{
    hoverImgTwo.style.opacity = "0";
    hoverImg.style.opacity = "0"
    hoverImgThree.style.opacity = "0"
    hoverImgFour.style.opacity = "1"
})






const trackWhere = document.querySelector('.carousel-track-where');
const prevBtnWhere = document.getElementById('prevBtnWhere');
const nextBtnWhere = document.getElementById('nextBtnWhere');
const slidesWhere = Array.from(trackWhere.children);

const totalOriginalSlidesWhere = slidesWhere.length;
const visibleSlidesWhere = 4; 


const slidesToClone = visibleSlidesWhere; 


const firstCloneSlidesWhere = slidesWhere.slice(0, slidesToClone);
const lastCloneSlidesWhere = slidesWhere.slice(totalOriginalSlidesWhere - slidesToClone);


firstCloneSlidesWhere.forEach(item => {
    trackWhere.appendChild(item.cloneNode(true));
});

lastCloneSlidesWhere.reverse().forEach(item => {
    trackWhere.prepend(item.cloneNode(true));
});


const allSlidesWhere = Array.from(trackWhere.children); 
const slideWidthWhere = allSlidesWhere[0].getBoundingClientRect().width;


let currentIndexWhere = slidesToClone; 


trackWhere.style.transition = 'none';
trackWhere.style.transform = `translateX(-${currentIndexWhere * slideWidthWhere}px)`;

function moveCarouselWhere() {
    trackWhere.style.transition = 'transform 0.5s ease-in-out';
    trackWhere.style.transform = `translateX(-${currentIndexWhere * slideWidthWhere}px)`;
}


trackWhere.addEventListener('transitionend', () => {
    if (currentIndexWhere >= totalOriginalSlidesWhere + slidesToClone) {
        trackWhere.style.transition = 'none';
        currentIndexWhere = slidesToClone; 
        trackWhere.style.transform = `translateX(-${currentIndexWhere * slideWidthWhere}px)`;
   
    } else if (currentIndexWhere < slidesToClone) {
        trackWhere.style.transition = 'none'; 
        currentIndexWhere = totalOriginalSlidesWhere; 
        trackWhere.style.transform = `translateX(-${currentIndexWhere * slideWidthWhere}px)`;
    }
});



nextBtnWhere.addEventListener('click', () => {
    currentIndexWhere++;
    moveCarouselWhere();
});


prevBtnWhere.addEventListener('click', () => {
    currentIndexWhere--;
    moveCarouselWhere();
});




const trackWhat = document.querySelector('.carousel-track'); 
const prevBtnWhat = document.getElementById('prevBtnWhat'); 
const nextBtnWhat = document.getElementById('nextBtnWhat'); 
const slidesWhat = Array.from(trackWhat.children);

const totalOriginalSlidesWhat = slidesWhat.length; 
const visibleSlidesWhat = 4; 


const firstFourSlidesWhat = slidesWhat.slice(0, visibleSlidesWhat);
const lastFourSlidesWhat = slidesWhat.slice(totalOriginalSlidesWhat - visibleSlidesWhat);


firstFourSlidesWhat.forEach(item => {
    trackWhat.appendChild(item.cloneNode(true)); 
});
lastFourSlidesWhat.reverse().forEach(item => {
    trackWhat.prepend(item.cloneNode(true)); 
});


const allSlidesWhat = Array.from(trackWhat.children);

const slideWidthWhat = allSlidesWhat[0].getBoundingClientRect().width;

let currentIndexWhat = visibleSlidesWhat; 


trackWhat.style.transition = 'none';
trackWhat.style.transform = `translateX(-${currentIndexWhat * slideWidthWhat}px)`;


function moveCarouselWhat() {
    trackWhat.style.transition = 'transform 0.5s ease-in-out';
    trackWhat.style.transform = `translateX(-${currentIndexWhat * slideWidthWhat}px)`;
}


trackWhat.addEventListener('transitionend', () => {
    if (currentIndexWhat >= totalOriginalSlidesWhat + visibleSlidesWhat) {
        trackWhat.style.transition = 'none';
        currentIndexWhat = visibleSlidesWhat; 
        trackWhat.style.transform = `translateX(-${currentIndexWhat * slideWidthWhat}px)`;
        
    } else if (currentIndexWhat < visibleSlidesWhat) {
        trackWhat.style.transition = 'none';
        currentIndexWhat = totalOriginalSlidesWhat; 
        trackWhat.style.transform = `translateX(-${currentIndexWhat * slideWidthWhat}px)`;
    }
});



nextBtnWhat.addEventListener('click', () => {
    if (currentIndexWhat < allSlidesWhat.length - visibleSlidesWhat) {
        currentIndexWhat++;
        moveCarouselWhat();
    }
});

prevBtnWhat.addEventListener('click', () => {
    if (currentIndexWhat > 0) {
        currentIndexWhat--;
        moveCarouselWhat();
    }
});
