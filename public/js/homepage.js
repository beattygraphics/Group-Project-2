const categoryBtns = document.querySelectorAll(".category-btn")
const nextCardBtn = document.querySelector("#next-card")
const prevCardBtn = document.querySelector("#prev-card")
const logoutBtn = document.querySelector('#logout-button');

const overviewContent = document.querySelector('.overview-content');
const cardFront = document.querySelector('.front-text');
const cardBack = document.querySelector('.back-text');

const cardNumber = document.querySelector('#card-number');
const categoryLength = document.querySelector('#category-length');


let currentCategory = 1;
let currentCards = [];
let currentCardIndex = 0;


// adds eventlisteners to categories list which grabs the category id (stored in "data-id") for FETCH call 
const getCardsFromCategory = async () => {
  for (let i = 0; i < categoryBtns.length; i++) {
    categoryBtns[i].addEventListener('click', async (e)=> {
      currentCategory = e.target.getAttribute('data-id');
      
      fetchCategoryInfo(currentCategory);
    });
  };
};

// fetch all cards belonging to a specific Category Id
async function fetchCategoryInfo (id) {
  const response = await fetch (`/api/cardCategory/${id}`, {
    method: 'GET',
  });

  const categoryObj = await response.json();
  currentCards = categoryObj.cards_in_category;
  currentCardIndex = 0;

 setDescription(categoryObj.description);
 setCardContent(currentCards, currentCardIndex);
 categoryLength.innerHTML = currentCards.length;
}


// displays Category description 
function setDescription(description) {
  overviewContent.innerHTML = description;
}

// displays card front & back content 
function setCardContent(array, index) {
  cardNumber.innerHTML = currentCardIndex + 1;
  cardFront.innerHTML = array[index].question;
  cardBack.innerHTML = array[index].answer;
}


// functions for changing cards
function nextCard() {
  if(currentCardIndex < currentCards.length-1){
    currentCardIndex++;
    setCardContent(currentCards, currentCardIndex);
  } else {
    currentCardIndex = 0;
    setCardContent(currentCards, currentCardIndex);
  };
};

function prevCard() {
  if(currentCardIndex === 0){
    currentCardIndex = currentCards.length - 1;
    setCardContent(currentCards, currentCardIndex);
  } else {
    currentCardIndex--;
    setCardContent(currentCards, currentCardIndex);
  }
}





// logout functionality 
const handleLogout = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};


// event listeners
logoutBtn.addEventListener('click', handleLogout);
nextCardBtn.addEventListener('click', nextCard);
prevCardBtn.addEventListener('click', prevCard);


getCardsFromCategory();
fetchCategoryInfo(currentCategory);