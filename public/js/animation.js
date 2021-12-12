const card = document.querySelector(".card");     
let playing = false;
const flipBtn = document.querySelector(".flip-btn");

const mobileNav = document.querySelector(".side-nav");
const mobileNavCloseBtn = document.querySelector(".btn-close");
const hamburgerMenu = document.querySelector('#hamburger');

const categoryMobile = document.querySelector(".category-nav");
const categoryMobileCloseBtn = document.querySelector(".cat-btn-close");
const categoryMobileOpenBtn = document.querySelector("#category-nav-btn");
  

const star = document.querySelector(".star")
let favorited = false;

const modalBtn = document.querySelector("#category-modal-btn");
const modalBtnClose = document.querySelector('#modal-close');

function favoriteCard() {
  if(star.innerHTML = `<i class="far fa-star fa-2x"></i>`) {
    anime({
      targets: star,
      scale: [{value:1}, {value:1.2},{value:1, delay: 100} ],
          rotateZ: '360',
          easing: "easeInOutSine",
          duration: 400,
    });
    star.innerHTML = `<i class="fas fa-star fa-2x"></i>`
    star.style.color = "#F8DB26"
  } else if (star.innerHTML = `<i class="fas fa-star fa-2x"></i>`){
    anime({
      targets: star,
      scale: [{value:1}, {value:1.2},{value:1, delay: 100} ],
          rotateZ: '360',
          easing: "easeInOutSine",
          duration: 400,
    });
      star.innerHTML = ``
      star.style.color = "#FFFFFF"
  }
 
  
}


function cardFlip() {
  if(playing) return;       
  playing = true;       
  anime({   
    targets: card,
          scale: [{value:1}, {value:1.05},{value:1, delay: 250} ],
          rotateY: {value: "+=180", delay: 200},
          easing: "easeInOutSine",
          duration: 400,
          complete: function(anim) {
            playing = false;
          }
        });
}

function toggleModal () {
  document.querySelector("#description-modal").classList.toggle('hidden');
}

function toggleMobileNavOpen() {
  mobileNav.style.width = "100%";
}

function toggleMobileNavClose() {
  mobileNav.style.width = "0";
}

function toggleMobileCatOpen() {
  categoryMobile.style.width = "100%";
}

function toggleMobileCatClose() {
  categoryMobile.style.width = "0";
}

function nullCheckEventListener(element, action, funct) {
  if (element) {
    element.addEventListener(action, funct);
  }
}

nullCheckEventListener(mobileNavCloseBtn, "click", toggleMobileNavClose);
nullCheckEventListener(hamburgerMenu, "click", toggleMobileNavOpen);
nullCheckEventListener(categoryMobileOpenBtn, "click", toggleMobileCatOpen);
nullCheckEventListener(categoryMobileCloseBtn, "click", toggleMobileCatClose);
nullCheckEventListener(modalBtn, "click", toggleModal);
nullCheckEventListener(modalBtnClose, "click", toggleModal);
nullCheckEventListener(flipBtn, "click", cardFlip);
nullCheckEventListener(star, "click", favoriteCard);
