// Dice roll for player 1
let playerOne = Math.floor(Math.random()*6   ) + 1;

switch (playerOne) {
  case 1:
    let one = document.querySelectorAll(".dice1 .one");
    one.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 2:
    let two = document.querySelectorAll(".dice1 .two");
    two.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 3:
    let three = document.querySelectorAll(".dice1 .three");
    three.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 4:
    let four = document.querySelectorAll(".dice1 .four");
    four.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 5:
    let five = document.querySelectorAll(".dice1 .five");
    five.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 6:
    let six = document.querySelectorAll(".dice1 .six");
    six.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;
}

// Dice roll for player 2
let playerTwo = Math.floor(Math.random() * 6) + 1;

switch (playerTwo) {
  case 1:
    let one = document.querySelectorAll(".dice2 .one");
    one.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 2:
    let two = document.querySelectorAll(".dice2 .two");
    two.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 3:
    let three = document.querySelectorAll(".dice2 .three");
    three.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 4:
    let four = document.querySelectorAll(".dice2 .four");
    four.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 5:
    let five = document.querySelectorAll(".dice2 .five");
    five.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;

  case 6:
    let six = document.querySelectorAll(".dice2 .six");
    six.forEach(item => {
      item.style.visibility = "hidden";
    })
    break;
}

// Who Wins
if (playerOne > playerTwo) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins";
} else if (playerOne < playerTwo) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏁";
} else {
  document.querySelector("h1").innerHTML = "🏳️ Draw! 🏳️";
}
