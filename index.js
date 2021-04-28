let $start = document.getElementById('start')
let $game = document.getElementById('game')

$start.addEventListener('click', startGame)

function startGame() {
    console.log('start')
    $game.style.backgroundColor = "#fff"
    $start.classList.add('hide');
}
function renderBox() {

}