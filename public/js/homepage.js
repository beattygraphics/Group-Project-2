const categoryBtns = document.querySelectorAll(".category-btn")
const nextCardBtn = document.querySelector("#next-card")
const prevCardBtn = document.querySelector("#prev-card")
const logoutBtn = document.querySelector('#logout-button');

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

logoutBtn.addEventListener('click', handleLogout);

getCardsFromCategory()