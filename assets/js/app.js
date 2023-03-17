let random = Math.ceil(Math.random() * 20);
console.log(random);

let message = document.querySelector(".msg");

let score = 10;
let topScore = 0;

// check-button events:
document.querySelector(".check").onclick = () => {
  const guess = document.querySelector(".guess").value;
  if (!guess) message.textContent = "Please write your guess.";
  else if (guess == random) {
    message.textContent = "🎉 Congratulations! You guessed it right!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = random;
  }
  // top-score events:
  if (score > topScore) {
    topScore = score;
    document.querySelector(".top-score").textContent = topScore;
  }
  // ----------------
  else {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guess > random
        ? (message.textContent = "Too high. ⏬")
        : (message.textContent = "Too low. ⏫");
    } else {
      message.textContent = "😞 Sorry, game over.";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "black";
    }
  }
};
// ----------------

// playagain events:
document.querySelector(".again").onclick = () => {
  random = Math.ceil(Math.random() * 20);
  console.log(random);
  message.textContent = "New game, new chance!";
  document.querySelector("body").style.backgroundColor = "#329da8";
  score = 10;
  document.querySelector(".score").textContent = 10;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
};
