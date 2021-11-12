//HTML Reference
const mainCont = document.querySelector('.main');
const range = document.getElementById('difficulty');
const playBtn = document.querySelector('.play-btn')


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
        case '3':
            numberCell = 30;
            cellPerSide = 6;
    }

    //generiamo le carte nel container
    genCard(numberCell, cellPerSide)

})








/* --------------------FUNCTION-------------------- */
//generazione card
function genCard(numberCell, cellPerSide) {
    for (let i = 0; i < numberCell; i++) {
        //generiamo il card conteiner
        const cardCont = document.createElement('div');
        cardCont.classList.add('card-conteiner');
        mainCont.append(cardCont);

        //generiamo la card
        const card = document.createElement('div');
        card.classList.add('card');
        cardCont.append(card);

        card.innerHTML = `
        <div class="front"><img src="./img/texture-card.jpg" alt=""></div>
        <div class="back"><img src="./img/ironman.jpg" alt=""></div>
        `

        cardCont.style.height = `calc(100% / ${cellPerSide})`
        cardCont.style.width = `calc(100% / ${cellPerSide})`

        cardCont.addEventListener('click', function() {
            cardCont.classList.add('active')
        })
    }
}