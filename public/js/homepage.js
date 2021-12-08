const categoryBtns = document.querySelectorAll(".category-btn")
const nextCardBtn = document.querySelector("#next-card")
const prevCardBtn = document.querySelector("#prev-card")

// console.log(categoryBtns)
// console.log(nextCardBtn)
// console.log(prevCardBtn)
let currentCard = 1;

const getCardsFromCategory = ()=> {
  for (let i = 0; i < categoryBtns.length; i++) {
    categoryBtns[i].addEventListener('click', (e)=> {
      currentCard = e.target.getAttribute('data-id');
      console.log(currentCard)
    })
  }
}

getCardsFromCategory()