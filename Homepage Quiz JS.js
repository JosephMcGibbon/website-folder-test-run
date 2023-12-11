document.getElementById('submit').addEventListener('click', function () {
    let questions = document.querySelectorAll('.question-container');
    let correctCount = 0;
    let incorrectCount = 0;
    let resultsContainer = document.getElementById('results');

    questions.forEach(function (question) {
        let selectedOption = question.querySelector('.option.selected');
        let correctOption = question.querySelector('.option[data-answer="correct"]');
        let incorrectOption = question.querySelector('.option[data-answer="wrong"]');
        let explanation = question.querySelector('.explanation');

        if (selectedOption && selectedOption.dataset.answer === 'correct') {
            correctCount++;
            selectedOption.classList.add('correct');
            explanation.textContent = 'Correct! ' + explanation.dataset.question;
        } else if (selectedOption) {
            incorrectCount++;
            selectedOption.classList.add('incorrect');
            correctOption.classList.add('correct');
            explanation.textContent = 'Incorrect. ' + explanation.dataset.question;
        }
    });

    resultsContainer.innerHTML = 'You got ' + correctCount + ' question(s) correct and ' + incorrectCount + ' question(s) incorrect.';
});

document.getElementById('restart').addEventListener('click', function () {
    let options = document.querySelectorAll('.option');
    let explanations = document.querySelectorAll('.explanation');
    let resultsContainer = document.getElementById('results');

    options.forEach(function (option) {
        option.classList.remove('selected', 'correct', 'incorrect');
    });

    explanations.forEach(function (explanation) {
        explanation.textContent = '';
    });

    resultsContainer.textContent = '';
});

let options = document.querySelectorAll('.option');
options.forEach(function (option) {
    option.addEventListener('click', function () {
        let questionContainer = this.closest('.question-container');
        let selectedOptions = questionContainer.querySelectorAll('.option.selected');

        selectedOptions.forEach(function (selectedOption) {
            selectedOption.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});