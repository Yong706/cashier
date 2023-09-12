// JavaScript code for the cash payment simulator

document.addEventListener("DOMContentLoaded", function () {
  const welcomeScreen = document.getElementById("welcome-screen");
  const gameScreen = document.getElementById("game-screen");
  const boyButton = document.getElementById("boy-button");
  const girlButton = document.getElementById("girl-button");
  const playButton = document.getElementById("play-button");
  const questionModal = document.getElementById("question-modal");
  const questionText = document.getElementById("question-text");
  const closeButton = document.getElementById("close-button");
  const moneyContainer = document.getElementById("money-container");
  const oneCentButton = document.getElementById("one-cent-button");

  let selectedCharacter = "";
  let isPlaying = false;

  // Character selection
  boyButton.addEventListener("click", () => {
    selectedCharacter = "Boy";
    startGame();
  });

  girlButton.addEventListener("click", () => {
    selectedCharacter = "Girl";
    startGame();
  });

  function startGame() {
    welcomeScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    isPlaying = true;
    showRandomQuestion();
  }

  // Question modal
  closeButton.addEventListener("click", () => {
    questionModal.classList.add("hidden");
    if (isPlaying) {
      showRandomQuestion();
    }
  });

  function showRandomQuestion() {
    // Generate and display a random question
    const randomAmount = (Math.random() * 30).toFixed(2);
    questionText.textContent = `How much is RM ${randomAmount}?`;
    questionModal.classList.remove("hidden");
  }

  // Money denominations
  const moneyDenominations = [
    { value: 1.00, text: "RM 1", image: "rm1.png" }, // Replace with your image file path
    { value: 5.00, text: "RM 5", image: "rm5.png" }, // Replace with your image file path
    { value: 10.00, text: "RM 10", image: "rm10.png" }, // Replace with your image file path
    { value: 20.00, text: "RM 20", image: "rm20.png" }, // Replace with your image file path
  ];

  // Populate the money container with buttons and images
  moneyDenominations.forEach((denomination) => {
    const button = document.createElement("button");
    button.className = "money-denomination";
    button.textContent = denomination.text;
    button.addEventListener("click", () => handleMoneySelection(denomination.value));
    moneyContainer.appendChild(button);

    // Create and append an image element
    const img = document.createElement("img");
    img.src = denomination.image; // Change to your image file path
    img.alt = denomination.text;
    moneyContainer.appendChild(img);
  });

  // 1 Cent button
  oneCentButton.addEventListener("click", () => handleMoneySelection(0.01));

  // Handle money selection
  function handleMoneySelection(amount) {
    // Handle the logic for adding the selected amount to the game
    // You can keep track of the total amount, check if it matches the question, etc.
    // Update the game state accordingly
  }
});
