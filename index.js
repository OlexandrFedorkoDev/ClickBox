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
    console.log('start');
    $game.style.backgroundColor = '#fff';
    $start.classList.add('hide');

    renderBox()
}
function renderBox() {
    $game.innerHTML = ' ';
    var box = document.createElement('div');
    box.style.height = box.style.width = '50px';
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000';
    box.style.top = '50px';
    box.style.left = '70px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement("afterbegin", box);
}