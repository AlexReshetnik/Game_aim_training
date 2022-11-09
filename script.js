var start = document.querySelector("#start");
var menu = document.querySelector("#menu");
var prosesGame = document.querySelector("#prosesGame");
var timer = document.querySelector("#time");
menu.querySelectorAll('a').forEach(e => { e.addEventListener('click', startClick)});
var tim = 0;
var score = 0;
var circle;
function startClick(event) {
    tim = event.target.id; 
    prosesGame.querySelector(".window").innerHTML = "";
    prosesGame.querySelector(".window").classList.remove("center");
    game();
}
setInterval(changetime, 1000);
function changetime() {
    if (tim == 0) { finishGame(); return }
    timer.innerHTML = tim < 10 ? `Remains 00:0${tim--}` : `Remains 00:${tim--}`;
}
var circle;
var colors = ["red", "rgb(0, 255, 0)", "blue", "blueviolet", "cyan", "deeppink", "rgb(255, 0, 157)"];

function game() {
    circle = document.createElement("div");
    circle.classList.add("circle");
    
    circle.style.backgroundColor = colors[score % colors.length];
    circle.style.transform = `translate(${getRandom(20, 480)}px,${getRandom(20, 480)}px)`
    circle.style.width=circle.style.height = `${getRandom(5, 30)}px`
    circle.addEventListener('click', clickCircle);
    prosesGame.querySelector(".window").append(circle);
}
function clickCircle(event) {
    score++
    this.parentNode.removeChild(this);
    game();
}
function finishGame() {
    timer.innerHTML = "";
    circle.parentNode.removeChild(circle);
    prosesGame.querySelector(".window").innerHTML = `<h1>Score : ${score}  </h1>
    <a href="#start">Let's repeat</a>`;
    prosesGame.querySelector(".window").classList.add("center");
    score = 0;
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}