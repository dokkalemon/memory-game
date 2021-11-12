//HTML Reference
const mainCont = document.querySelector('.main');
const range = document.getElementById('difficulty');
const playBtn = document.querySelector('.play-btn')

//array di supereroi
const heroes = [
    {
        image: './img/batman.jpg',
        value: 1,
    },
    {
        image: './img/batman.jpg',
        value: 1,
    },
    {
        image: './img/captain-america.jpg',
        value: 2,
    },
    {
        image: './img/captain-america.jpg',
        value: 2,
    },
    {
        image: './img/cat-woman.jpg',
        value: 3,
    },
    {
        image: './img/cat-woman.jpg',
        value: 3,
    },
    {
        image: './img/deathpool.jpg',
        value: 4,
    },
    {
        image: './img/deathpool.jpg',
        value: 4,
    },
    {
        image: './img/flash.jpg',
        value: 5,
    },
    {
        image: './img/flash.jpg',
        value: 5,
    },
    {
        image: './img/hulk.jpg',
        value: 6,
    },
    {
        image: './img/hulk.jpg',
        value: 6,
    },
    {
        image: './img/ironman.jpg',
        value: 7,
    },
    {
        image: './img/ironman.jpg',
        value: 7,
    },
    {
        image: './img/joker.jpg',
        value: 8,
    },
    {
        image: './img/joker.jpg',
        value: 8,
    },
    {
        image: './img/sonic.jpg',
        value: 9,
    },
    {
        image: './img/sonic.jpg',
        value: 9,
    },
    {
        image: './img/spiderman.jpg',
        value: 10,
    },
    {
        image: './img/spiderman.jpg',
        value: 10,
    },
    {
        image: './img/superman.jpg',
        value: 11,
    },
    {
        image: './img/superman.jpg',
        value: 11,
    },
    {
        image: './img/thor.jpg',
        value: 12,
    },
    {
        image: './img/thor.jpg',
        value: 12,
    },
    {
        image: './img/venom.jpg',
        value: 13,
    },
    {
        image: './img/venom.jpg',
        value: 13,
    },
    {
        image: './img/wolverine.jpg',
        value: 14,
    },
    {
        image: './img/wolverine.jpg',
        value: 14,
    },
    {
        image: './img/wonder-woman.jpg',
        value: 15,
    },
    {
        image: './img/wonder-woman.jpg',
        value: 15,
    },

]

//array vuoto di numeri random
const randomNumber = [];

//evento al click
playBtn.addEventListener('click', function() {
    
    //resettiamo il main container
    mainCont.innerHTML = '';
    
    //settiamo la griglia in base alla difficoltà
    const difficulty = range.value;
    let numberCell;
    let cellPerSide;

    switch (difficulty) {
        case '1':
            numberCell = 12;
            cellPerSide = 4;
            break;
        case '2':
            numberCell = 20;
            cellPerSide = 5;
            break;
        case '3':
            numberCell = 30;
            cellPerSide = 6;
    }

    //generiamo l'array di numeri random
    gen4Numbers(numberCell,)
    //generiamo le carte nel container
    genCard(numberCell, cellPerSide,);
 
   
})









/* --------------------FUNCTION-------------------- */
//generazione card
function genCard(numberCell, cellPerSide,) {
    for (let i = 0; i < numberCell; i++) {
        //generiamo il card conteiner
        const cardCont = document.createElement('div');
        cardCont.classList.add('card-conteiner');
        mainCont.append(cardCont);

        //generiamo la card
        const card = document.createElement('div');
        card.classList.add('card');
        cardCont.append(card);

        //innestiamo il codice html delle immagini
        card.innerHTML = `
        <div class="front"><img src="./img/texture-card.jpg" alt=""></div>
        <div class="back"><img src="${heroes[randomNumber[i]].image}" alt=""></div>
        `
        //stabiliamo le dimensioni delle carte
        cardCont.style.height = `calc(100% / ${cellPerSide})`
        cardCont.style.width = `calc(100% / ${cellPerSide})`

        //mettiamo la lista active
        cardCont.addEventListener('click', function() {
            cardCont.classList.add('active')

        })
    }
}


//generiamo un numero random


function gen4Numbers(numberCell) {
    //mettiamo un numero univoco
    while (randomNumber.length < numberCell) {
        var newNr = (parseInt(Math.random() * numberCell));
        if (randomNumber.indexOf(newNr) == -1) {
            randomNumber.push(newNr);
        }
    }
    console.log(randomNumber);
    return randomNumber;
}

