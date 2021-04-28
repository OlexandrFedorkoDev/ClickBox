let $start = document.getElementById('start');
let $game = document.getElementById('game');
let score = 0;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        score++
        renderBox()

    }
}

function startGame() {
    $game.style.backgroundColor = '#fff';
    $start.classList.add('hide');

    renderBox()
}
function renderBox() {
    console.log(getRandom(30, 100))
    $game.innerHTML = ' ';
    let box = document.createElement('div');
    let boxsize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - boxsize;
    let maxLeft = gameSize.width - boxsize;
    console.log(gameSize)

    box.style.height = box.style.width = boxsize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement("afterbegin", box);
}
function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min)
}