// Event listener for the "Submit" button
document.getElementById('submit').addEventListener('click', function () {
    // Select all question containers
    let questions = document.querySelectorAll('.question-container');
    // Initialize counters for correct and incorrect answers
    let correctCount = 0;
    let incorrectCount = 0;
    // Select the results container
    let resultsContainer = document.getElementById('results');

    // Iterate through each question container
    questions.forEach(function (question) {
        // Select the option that the user has selected
        let selectedOption = question.querySelector('.option.selected');
        // Select the correct and incorrect options
        let correctOption = question.querySelector('.option[data-answer="correct"]');
        let incorrectOption = question.querySelector('.option[data-answer="wrong"]');
        // Select the explanation element
        let explanation = question.querySelector('.explanation');

        // Check if the selected option is correct
        if (selectedOption && selectedOption.dataset.answer === 'correct') {
            // Increment the correct answer count
            correctCount++;
            // Add the 'correct' class to the selected option
            selectedOption.classList.add('correct');
            // Display a correct explanation
            explanation.textContent = 'Correct! ' + explanation.dataset.question;
        } else if (selectedOption) {
            // If the selected option is incorrect
            // Increment the incorrect answer count
            incorrectCount++;
            // Add 'incorrect' and 'correct' classes to highlight the correct answer
            selectedOption.classList.add('incorrect');
            correctOption.classList.add('correct');
            // Display an incorrect explanation with the correct answer
            explanation.textContent = 'Incorrect. ' + explanation.dataset.question;
        }
    });

    // Display the overall results
    resultsContainer.innerHTML = 'You got ' + correctCount + ' question(s) correct and ' + incorrectCount + ' question(s) incorrect.';
});

// Event listener for the "Restart Quiz" button
document.getElementById('restart').addEventListener('click', function () {
    // Select all option and explanation elements
    let options = document.querySelectorAll('.option');
    let explanations = document.querySelectorAll('.explanation');
    // Select the results container
    let resultsContainer = document.getElementById('results');

    // Reset all options and explanations to their initial state
    options.forEach(function (option) {
        option.classList.remove('selected', 'correct', 'incorrect');
    });

    explanations.forEach(function (explanation) {
        explanation.textContent = '';
    });

    resultsContainer.textContent = '';
});

// Event listener for the options to allow selecting only one answer per question
let options = document.querySelectorAll('.option');
options.forEach(function (option) {
    option.addEventListener('click', function () {
        // Select the parent question container
        let questionContainer = this.closest('.question-container');
        // Deselect all previously selected options in the same question container
        let selectedOptions = questionContainer.querySelectorAll('.option.selected');

        selectedOptions.forEach(function (selectedOption) {
            selectedOption.classList.remove('selected');
        });

        // Add 'selected' class to the clicked option
        this.classList.add('selected');
    });
});
