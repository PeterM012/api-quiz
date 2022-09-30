//question arrays
var questionHeaders = ["What does RGB stand for?","What are Pseudo Classes?","What are JavaScript Date Types","Which of the following is a Window Object Method?","What tag is used to change the title of a webpage?","What is the correct way to write an reference?"]
//answer arrays
var questionAnswers1 = ["red,blue,green", "red giant branch", "red-blue-green", "robust graphics booster"];
var questionAnswers2 = [":picture-in-picture", ":enable", "::hover", ":what"];
var questionAnswers3 = ["Defined type", "Letter Type", "Noll type", "Symbol type"];
var questionAnswers4 = ["Prompt()", "selection()", "moveTo()", "scrollWith()"];
var questionAnswers5 = ["</title>", "<head>", "<title>", "<page>"];
var questionAnswers6 = ["<a href=('')></a>", "<a href('')></a>", "<a href=()></a>", "<a href=('')><a>"];
var answers = [2,0,]; //using the answers from all six answer arrays, and the question headers

var answerSelection1 = document.getElementById('answer1') 
var answerSelection2 = document.getElementById('answer2') 
var answerSelection3 = document.getElementById('answer3') 
var answerSelection4 = document.getElementById('answer4') 
var currentQuestion = 0; //this will need to be increase by 1

//starts quiz
var startQuizBtn = document.getElementById("generate");
startQuizBtn.addEventListener("click", function() {
    setQuestionHeader();
    setQuestion();
});
// buttons for answer selections //create event listeners for answer buttons
answerSelection1.addEventListener('click', function() {
    if(answers[currentQuestion] == 0) {

    } else {
 
    }
    progressQuiz()
});
answerSelection2.addEventListener('click', function() {
    if(answers[currentQuestion] == 1) {

    } else {

    }
    progressQuiz()
});
answerSelection3.addEventListener('click', function() {
    if(answers[currentQuestion] == 2) {

    } else {

    }
    progressQuiz()
});
answerSelection4.addEventListener('click', function() {
    if(answers[currentQuestion] == 3) {

    } else {

    }
    progressQuiz()
});

function progressQuiz() { //call setQuestionText using addEventListner to change to next question
    currentQuestion++; //This should be used when clicking an answer button
    setQuestionHeader();
    setQuestion();
}

// sets header questions
function setQuestionHeader() {
    var newQuestion = document.getElementById('questions');    
    newQuestion.textContent =  questionHeaders[currentQuestion];  
}

function setQuestion() {
    if (currentQuestion == 0) {
        answerSelection1.textContent = questionAnswers1[0]
        answerSelection2.textContent = questionAnswers1[1]
        answerSelection3.textContent = questionAnswers1[2]
        answerSelection4.textContent = questionAnswers1[3]
    }
    if (currentQuestion == 1) {
        answerSelection1.textContent = questionAnswers2[0]
        answerSelection2.textContent = questionAnswers2[1]
        answerSelection3.textContent = questionAnswers2[2]
        answerSelection4.textContent = questionAnswers2[3]
    }
    if (currentQuestion == 2) {
        answerSelection1.textContent = questionAnswers3[0]
        answerSelection2.textContent = questionAnswers3[1]
        answerSelection3.textContent = questionAnswers3[2]
        answerSelection4.textContent = questionAnswers3[3]
    }
    if (currentQuestion == 3) {
        answerSelection1.textContent = questionAnswers4[0]
        answerSelection2.textContent = questionAnswers4[1]
        answerSelection3.textContent = questionAnswers4[2]
        answerSelection4.textContent = questionAnswers4[3]
    }
    if (currentQuestion == 4) {
        answerSelection1.textContent = questionAnswers5[0]
        answerSelection2.textContent = questionAnswers5[1]
        answerSelection3.textContent = questionAnswers5[2]
        answerSelection4.textContent = questionAnswers5[3]
    }
    if (currentQuestion == 5) {
        answerSelection1.textContent = questionAnswers6[0]
        answerSelection2.textContent = questionAnswers6[1]
        answerSelection3.textContent = questionAnswers6[2]
        answerSelection4.textContent = questionAnswers6[3]
    }
}



//Think about how to store each answer right or wrong //How do i tell what button was clicked and compare to the answer
