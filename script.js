document.addEventListener("DOMContentLoaded", function () {

let currentCell = null;

const cells = document.querySelectorAll(".cell");
const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const closeBtn = document.getElementById("closeBtn");

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        currentCell = this;
        questionText.textContent = this.dataset.question;
        answerText.textContent = this.dataset.answer;
        answerText.style.display = "none";
        questionBox.style.display = "flex";
        showAnswerBtn.style.display = "inline-block";
    });
});

showAnswerBtn.addEventListener("click", function () {
    answerText.style.display = "block";
    this.style.display = "none";
});

closeBtn.addEventListener("click", function () {
    questionBox.style.display = "none";
    if(currentCell){
        currentCell.textContent = "";
        currentCell.style.pointerEvents = "none";
    }
});

});