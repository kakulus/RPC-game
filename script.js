let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let reset = document.querySelector(".reset");
let auto_play = document.querySelector(".auto-play");
let result = document.querySelector(".js-result");
let move = document.querySelector(".js-move");
let scores = document.querySelector(".Js-sc");
let sure = document.querySelector(".sure");
let Yes = document.querySelector(".yes");
let No = document.querySelector(".no");
let intervalid;
let isautoplaying = false;
let colorDisplayed;
let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  loses: 0,
  Tie: 0,
};


function pickComputerMove() {
  const randomNumber = Math.round(Math.random() * 2) + 1;

  let computerMove = "";

  if (randomNumber === 1) {
    computerMove = "Rock";
  } else if (randomNumber === 2) {
    computerMove = "Paper";
  } else if (randomNumber === 3) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playerGame(playerMove) {
  const computerMove = pickComputerMove();

  let results = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      results = "You lose";
    } else if (computerMove === "Paper") {
      results = "You win";
    } else if (computerMove === "Scissors") {
      results = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      results = "You win";
    } else if (computerMove === "Paper") {
      results = "Tie";
    } else if (computerMove === "Scissors") {
      results = "You lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      results = "Tie";
    } else if (computerMove === "Paper") {
      results = "You lose";
    } else if (computerMove === "Scissors") {
      results = "You win";
    }
  }

  if (results === "You win") {
    score.Wins += 1;
  } else if (results === "You lose") {
    score.loses += 1;
  } else if (results === "Tie") {
    score.Tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  move.textContent = results;

  result.innerHTML = `You  <img src="${playerMove}-emoji.png" class="move-icon" alt="">   <img src="${computerMove}-emoji.png" alt="" class="move-icon" > Computer`;

  scores.textContent = `Wins: ${score.Wins} || Loses: ${score.loses} || Tie: ${score.Tie}`;
}

function autoplay() {
  if (!isautoplaying) {
    intervalid = setInterval(function () {
      const playerMove = pickComputerMove();
      playerGame(playerMove);
    }, 2000);
    isautoplaying = true;
    auto_play.innerHTML = "Stop-play";
  } else {
    clearInterval(intervalid);
    isautoplaying = false;
    auto_play.textContent = "Auto-play";
  }
}

function updateScore() {
  scores.textContent = `Wins: ${score.Wins} || Loses: ${score.loses} || Tie: ${score.Tie}`;
}


function displayColor1() {
  if (colorDisplayed) {
    btn1.style.border = "3px solid white";
    colorDisplayed = false;
  } else {
    btn1.style.border = "3px solid blue";
    colorDisplayed = true;
    setTimeout(displayColor1, 100);
  }
}
function displayColor2() {
  if (colorDisplayed) {
    btn2.style.border = "3px solid white";
    colorDisplayed = false;
  } else {
    btn2.style.border = "3px solid red";
    colorDisplayed = true;
    setTimeout(displayColor2, 100);
  }
}
function displayColor3() {
  if (colorDisplayed) {
    btn3.style.border = "3px solid white";
    colorDisplayed = false;
  } else {
    btn3.style.border = "3px solid yellow";
    colorDisplayed = true;
    setTimeout(displayColor3, 100);
  }
}

btn1.addEventListener("click", function () {
  playerGame("Rock");
  displayColor1();
});
btn2.addEventListener("click", function () {
  playerGame("Paper");
  displayColor2();
});
btn3.addEventListener("click", function () {
  playerGame("Scissors");
  displayColor3();
});
reset.addEventListener("click", function () {
  (score.Wins = 0),
    (score.loses = 0),
    (score.Tie = 0),
    localStorage.removeItem("score"),
    updateScore();
});
auto_play.addEventListener("click", function () {
  autoplay();
  aut();
});









