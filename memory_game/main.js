document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'sprite',
            img: 'images/sprite.png'
        },
        {
            name: 'mello yello',
            img: 'images/melloyello.png'
        },
        {
            name: 'mt dew',
            img: 'images/mtdew.webp'
        },
        {
            name: 'coke',
            img: 'images/coke.png'
        },
        {
            name: 'a&w',
            img: 'images/a&w.png'
        },
        {
            name: 'mug',
            img: 'images/mugrootbeer.png'
        },
        {
            name: 'fruitpunch',
            img: 'images/fruitpunch.webp'
        },
        {
            name: 'black cherry',
            img: 'images/blackcherry.png'
        },
        {
            name: 'sunkist',
            img: 'images/sunkist.webp'
        },
        {
            name: 'drbrown',
            img: 'images/drbrown.webp'
        },
        {
            name: 'grape soda',
            img: 'images/grapesoda.png'
        },
        {
            name: 'wild cherry',
            img: 'images/wildcherry.png'
        },
        {
            name: 'pepsi',
            img: 'pepsi'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})