const categoryBtns = document.querySelectorAll(".category-btn");
const nextCardBtn = document.querySelector("#next-card");
const prevCardBtn = document.querySelector("#prev-card");

let currentCategory = 1;
let cardQuestions = [];
let cardAnswers = []
// adds eventlisteners to categories list which grabs the category id (stored in "data-id") for FETCH call 
const getCardsFromCategory = async () => {
  for (let i = 0; i < categoryBtns.length; i++) {
    categoryBtns[i].addEventListener('click', async (e)=> {
      currentCategory = e.target.getAttribute('data-id');

      const response = await fetch (`/api/cardCategory/${currentCategory}`, {
        method: 'GET',
      });

     const cardObjArray = await response.json();
     const cardIdArray = [];
     
     cardObjArray.forEach(card => {
       cardIdArray.push(card.card_id)
     });

     await Promise.all(
       cardIdArray.map(async (id) => {
         const response = await fetch(`/api/card/`);
         const cards = await response.json()
         console.log(cards)
       })
     )

    });
  };
};






getCardsFromCategory()