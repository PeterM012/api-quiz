//question arrays
var questionHeaders = ["1. What does RGB stand for?","2. What are Pseudo Classes?","3. What are JavaScript Date Types","4. Which of the following is a Window Object Method?","5. What tag is used to start the title?","6. What is the correct way to write an reference?"]
//answer arrays
var questionAnswers1 = ["1. red,blue,green", "2. red giant branch", "3. red-blue-green", "4. robust graphics booster"];
var questionAnswers2 = ["1. :picture-in-picture", "2. :enable", "3. ::hover", "4. :what"];
var questionAnswers3 = ["1. Defined type", "2. Letter Type", "3. Noll type", "4. Symbol type"];
var questionAnswers4 = ["1. Prompt()", "2. selection()", "3. moveTo()", "4. scrollWith()"];
var questionAnswers5 = ["1. </title>", "2. <head>", "3. <page>", "4. <title>"];
var questionAnswers6 = ["1. <a href=('')></a>", "2. <a href('')></a>", "3. <a href=()></a>", "4. <a href=('')><a>"];
var answers = [2,0,3,2,3,0]; //using the answers from all six answer arrays, and the question headers


var answerSelection1 = document.getElementById('answer1') 
var answerSelection2 = document.getElementById('answer2') 
var answerSelection3 = document.getElementById('answer3') 
var answerSelection4 = document.getElementById('answer4') 
var currentQuestion = 0; //this will need to be increase by 1
var timeRemaining  = document.getElementById('time-remaining');
var pickedAnswer = document.getElementById('choice')


var ending = document.getElementById('input-group'); 


var timeLeft = 59;
var timer;


//starts quiz
var startQuizBtn = document.getElementById("generate");
startQuizBtn.addEventListener("click", function() {
    startQuizBtn.setAttribute("style", "display:none;");
    startGame();
    setQuestionHeader();
    setQuestion();
    answerSelection1.setAttribute("style", "display:inline"); 
    answerSelection2.setAttribute("style", "display:inline;"); 
    answerSelection3.setAttribute("style", "display:inline;"); 
    answerSelection4.setAttribute("style", "display:inline;"); 

});


// buttons for answer selections //create event listeners for answer buttons
answerSelection1.addEventListener('click', function() {
    if(answers[currentQuestion] == 0) {
        // Code here gets ran when the answer is correct
        pickedAnswer.textContent = "Correct"
    } 
    else {
        // Code here gets ran when the answer is wrong
        pickedAnswer.textContent = "Wrong"
        timeLeft-=15

    }
    progressQuiz()
});
answerSelection2.addEventListener('click', function() {
    if(answers[currentQuestion] == 1) {
        pickedAnswer.textContent = "Correct"
    } 
    else {
        pickedAnswer.textContent = "Wrong"
        timeLeft-=15
    }
    progressQuiz()
});
answerSelection3.addEventListener('click', function() {
    if(answers[currentQuestion] == 2) {
        pickedAnswer.textContent = "Correct"
    } 
    else {
        pickedAnswer.textContent = "Wrong"
        timeLeft-=15
    }
    progressQuiz()
});
answerSelection4.addEventListener('click', function() {
    if(answers[currentQuestion] == 3) {
        pickedAnswer.textContent = "Correct"
    } 
    else {
        pickedAnswer.textContent = "Wrong"
        timeLeft-=15
    }
    progressQuiz()
});

function progressQuiz() { //call setQuestionText using addEventListner to change to next question
    if(currentQuestion < 5){
    currentQuestion++; //This should be used when clicking an answer button
    setQuestionHeader();
    setQuestion();
}
    else{ 
        var newQuestion = document.getElementById('questions');
        newQuestion.setAttribute("style", "display:none;");
        answerSelection1.setAttribute("style", "display:none;"); 
        answerSelection2.setAttribute("style", "display:none;"); 
        answerSelection3.setAttribute("style", "display:none;"); 
        answerSelection4.setAttribute("style", "display:none;");  
        pickedAnswer.setAttribute("style", "display:none;");
        ending.setAttribute("style", "display:block;");
    }
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

function startGame() {
    timeRemaining.textContent = timeLeft;
    timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
        } 
        else {
            clearInterval(timer);
            message = alert("Out of Time.Try Again");
        }
        timeRemaining.textContent = timeLeft;
    }, 1000);
}

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}


var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
var entry = document.getElementById('score').value;
    localStorage.setItem("entry", entry);
    console.log(entry)
});

function storeInfo() {
    localStorage.setItem("submit", JSON.stringify(entry))
}


//Think about how to store each answer right or wrong //How do i tell what button was clicked and compare to the answer
