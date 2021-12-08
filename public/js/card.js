// const { Card } = require("../../models");

console.log('hello world')


const handleCreateCard = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const question = document.querySelector('#card-question').value.trim();
    const answer = document.querySelector('#card-answer').value.trim();
    const category_id = document.querySelector('#create-category-select').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const cardResponse = await fetch('/api/card/', {
            method: 'POST',
            body: JSON.stringify({
                question,
                answer
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (cardResponse.ok) {
            const card = cardResponse.json();
            const cardCatResponse = await fetch('/api/cardCategory/', {
                method: 'POST',
                body: JSON.stringify({
                    card_id: card.id,
                    category_id
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (cardCatResponse.ok) {
                alert("Card successfully created!");
                document.location.replace('/');
            } else {
                alert("Error creating CardCategory");
            }
        } else {
            alert(response.statusText);
        }
    }
}



document
    .querySelector('#create-card-form')
    .addEventListener('submit', handleCreateCard);
