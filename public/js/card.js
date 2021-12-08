const handleCreateCard = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const question = document.querySelector('#card-question').value.trim();
    const answer = document.querySelector('#card-answer').value.trim();
    const category_id = document.querySelector('#create-category-select').value.trim();

    if (question && answer && category_id) {
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
            const card = await cardResponse.json();
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

const createSubmit = document.querySelector('#create-card-submit')
if (createSubmit) createSubmit.addEventListener('click', handleCreateCard);

const createClear = document.querySelector('#create-card-clear');
if (createClear) createClear.addEventListener('click', () => document.querySelector('#create-card-form').reset());
