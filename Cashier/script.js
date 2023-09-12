// JavaScript code for the cash payment simulator

document.addEventListener("DOMContentLoaded", function () {
  // ... Previous code ...

  // Handle money selection
  function handleMoneySelection(amount) {
    // Check if the game is currently active
    if (isPlaying) {
      // Add the selected amount to the total
      totalAmount += amount;

      // Update the display to show the current totalAmount
      updateTotalDisplay();

      // Check if the totalAmount matches the question amount
      const questionAmount = parseFloat(questionText.textContent.split("RM")[1]);
      if (totalAmount === questionAmount) {
        handleCorrectAnswer(); // Handle a correct answer
      }
    }
  }

  // Example function to update the total amount display
  function updateTotalDisplay() {
    // Update the display element with the total amount
    const totalAmountElement = document.getElementById("total-amount-element");
    totalAmountElement.textContent = `Total Amount: RM ${totalAmount.toFixed(2)}`;
  }

  // Example function to handle a correct answer
  function handleCorrectAnswer() {
    // Display a congratulatory message
    const congratsMessage = document.createElement("p");
    congratsMessage.textContent = "Congrats, you are correct.";
    document.body.appendChild(congratsMessage);

    // Optionally, you can proceed to the next question or perform other actions here
    // For example, you can call a function to load the next question
    loadNextQuestion();
  }

  // Example function to load the next question (you can replace this with your logic)
  function loadNextQuestion() {
    // Implement logic to load the next question here
    // For example, you can generate a new random question and update the question modal
    showRandomQuestion();
  }
});
