const ITEMS = document.querySelectorAll('.item');
const TURN = document.querySelector('.turn');
const REFRESH = document.querySelector('.refresh');
const YOU = document.querySelector('.you');
const TIES = document.querySelector('.ties');
const CPU = document.querySelector('.cpu');
const BODY = document.querySelector('body');
const CROSS = '❌'
const CIRCLE = '⭕'

TURN.textContent = CROSS;
YOU.textContent = 0;
TIES.textContent = 0;
CPU.textContent = 0;

const addSymbol = (e) => {
    if (e.target.textContent == '') {
        e.target.textContent = TURN.textContent;
        if (TURN.textContent == CROSS) {
            TURN.textContent = CIRCLE;
        } else {
            TURN.textContent = CROSS;
        }
    }
    win()
}

const refresh = () => {
    ITEMS.forEach(item => {
        item.textContent = ''
    })
    unblockEvent()
    BODY.removeChild(BODY.lastChild)
    TURN.textContent = CROSS;
}
const blockEvent = () => {
    ITEMS.forEach(item => {
        item.removeEventListener('click', addSymbol)
    })
}
const unblockEvent = () => {
    ITEMS.forEach(item => {
        item.addEventListener('click', addSymbol)
    })
}

const createScoreBoard = (result, mark) => {

    const scoreBoard = document.createElement('div');
    scoreBoard.classList.add('score-board');
    scoreBoard.innerHTML = `
    <p>${result}</p>
    <h1>${mark} takes the round</h1>
    <div>
    <button onclick="endGame()" class="quit">quit</button>
    <button onclick="refresh()" class="next">next round</button>
    </div>
    `
    BODY.appendChild(scoreBoard);
}

const endGame = () => {
    location.reload()
}

const win = () => {
    if (ITEMS[0].textContent == CROSS && ITEMS[1].textContent == CROSS && ITEMS[2].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[0].textContent == CIRCLE && ITEMS[1].textContent == CIRCLE && ITEMS[2].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[0].textContent == CROSS && ITEMS[3].textContent == CROSS && ITEMS[6].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[0].textContent == CIRCLE && ITEMS[3].textContent == CIRCLE && ITEMS[6].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[0].textContent == CROSS && ITEMS[4].textContent == CROSS && ITEMS[8].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[0].textContent == CIRCLE && ITEMS[4].textContent == CIRCLE && ITEMS[8].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[1].textContent == CROSS && ITEMS[4].textContent == CROSS && ITEMS[7].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[1].textContent == CIRCLE && ITEMS[4].textContent == CIRCLE && ITEMS[7].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[2].textContent == CROSS && ITEMS[5].textContent == CROSS && ITEMS[8].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[2].textContent == CIRCLE && ITEMS[5].textContent == CIRCLE && ITEMS[8].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[2].textContent == CROSS && ITEMS[4].textContent == CROSS && ITEMS[6].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[2].textContent == CIRCLE && ITEMS[4].textContent == CIRCLE && ITEMS[6].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[3].textContent == CROSS && ITEMS[4].textContent == CROSS && ITEMS[5].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[3].textContent == CIRCLE && ITEMS[4].textContent == CIRCLE && ITEMS[5].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[6].textContent == CROSS && ITEMS[7].textContent == CROSS && ITEMS[8].textContent == CROSS) {
        createScoreBoard('you won!', CROSS);
        blockEvent();
        YOU.textContent = parseInt(YOU.textContent) + 1;
    } else if (ITEMS[6].textContent == CIRCLE && ITEMS[7].textContent == CIRCLE && ITEMS[8].textContent == CIRCLE) {
        createScoreBoard('you won!', CIRCLE);
        blockEvent();
        CPU.textContent = parseInt(CPU.textContent) + 1;
    } else if (ITEMS[0].textContent != '' && ITEMS[1].textContent != '' && ITEMS[2].textContent != '' && ITEMS[3].textContent != '' && ITEMS[4].textContent != '' && ITEMS[5].textContent != '' && ITEMS[6].textContent != '' && ITEMS[7].textContent != '' && ITEMS[8].textContent != '') {
        createScoreBoard('draw', 'nobody');
        blockEvent();
        TIES.textContent = parseInt(TIES.textContent) + 1;
    }
}

ITEMS.forEach(item => {
    item.addEventListener('click', addSymbol)
})
REFRESH.addEventListener('click', refresh)