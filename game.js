var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6) + 1;
var randomsource1 = "images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomsource1);

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2 * 6) + 1;
var randomsource2 = "images/dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomsource2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player2 wins";
} else {
  document.querySelector("h1").innerHTML = "Its a tie";
}
