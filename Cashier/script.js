// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    let selectedGender = null;
    let userInput = 0;
    let randomAmount = generateRandomAmount();

    // Gender Selection Logic
    document.getElementById("boyBtn").addEventListener("click", function () {
        selectedGender = "boy";
        // Add any logic or styling for the boy selection if needed
    });

    document.getElementById("girlBtn").addEventListener("click", function () {
        selectedGender = "girl";
        // Add any logic or styling for the girl selection if needed
    });

    // Generating Random Amount
    function generateRandomAmount() {
        return (Math.random() * 30).toFixed(2);
    }

    // Printing the Question
    function printQuestion(amount) {
        document.getElementById("questionText").textContent = `Which combination of money is correct for RM ${amount}?`;
    }

    // Handling User Input
    document.querySelectorAll(".money-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const value = parseFloat(button.value);
            userInput += value;
        });
    });

    document.getElementById("submitBtn").addEventListener("click", function () {
        if (userInput === parseFloat(randomAmount)) {
            document.getElementById("resultText").textContent = "Congrats, the answer is correct!";
            // Show the Next Question and Exit buttons
        } else {
            document.getElementById("resultText").textContent = "Sorry, the answer is wrong. Please try again.";
        }
    });

    // Next Question and Exit
    document.getElementById("nextBtn").addEventListener("click", function () {
        userInput = 0;
        randomAmount = generateRandomAmount();
        printQuestion(randomAmount);
        document.getElementById("resultText").textContent = "";
        // Hide the Next Question and Exit buttons
    });

    document.getElementById("exitBtn").addEventListener("click", function () {
        const confirmExit = confirm("Are you sure you want to exit the game?");
        if (confirmExit) {
            window.location.href = "https://www.google.com"; // Replace with your exit URL
        }
    });

    // Photo Upload Logic
    const photoLink = document.getElementById("photoLink");

    photoLink.addEventListener("click", function (event) {
        event.preventDefault();
        const userPhotoLink = prompt("Enter your photo link:");

        if (userPhotoLink) {
            photoLink.href = userPhotoLink;
        }
    });
});
