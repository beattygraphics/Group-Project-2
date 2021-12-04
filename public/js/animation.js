var card = document.querySelector(".card");     
var playing = false;
var flipBtn = document.querySelector(".flip-btn");  

var star = document.querySelector(".star")
var favorited = false;

function favoriteCard() {
  event.preventDefault()
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
  } else {
    star.innerHTML = `<i class="far fa-star fa-2x"></i>`
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
      


flipBtn.addEventListener("click", cardFlip);
star.addEventListener("click", favoriteCard);