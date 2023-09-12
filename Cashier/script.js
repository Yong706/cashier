// JavaScript code for the game page
document.addEventListener("DOMContentLoaded", function () {
    let selectedMoney = []; // Array to store selected money values
    let randomAmount = generateRandomAmount();

    // Generating Random Amount
    function generateRandomAmount() {
        return (Math.random() * 30).toFixed(2);
    }

    // Printing the Question
    function printQuestion(amount) {
        document.getElementById("questionText").textContent = `Which combination of money is correct for RM ${amount}?`;
    }

    // Handling User Money Selection
    document.querySelectorAll(".money-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const value = parseFloat(button.value);
            if (selectedMoney.includes(value)) {
                // Deselect if already selected
                const index = selectedMoney.indexOf(value);
                if (index > -1) {
                    selectedMoney.splice(index, 1);
                }
                button.classList.remove("selected");
            } else {
                selectedMoney.push(value);
                button.classList.add("selected");
            }
        });
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        // Calculate the sum of selected money
        const sum = selectedMoney.reduce((acc, val) => acc + val, 0);

        if (sum === parseFloat(randomAmount)) {
            document.getElementById("resultText").textContent = "Congrats, the answer is correct!";
            // Show the Next Question and Exit buttons
        } else {
            document.getElementById("resultText").textContent = "Sorry, the answer is wrong. Please try again.";
        }
    });

    // Next Question and Exit
    document.getElementById("nextBtn").addEventListener("click", function () {
        selectedMoney = []; // Reset selected money
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

    // Initialize the game
    printQuestion(randomAmount);
});
