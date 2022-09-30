var newQuestion = document.getElementById("questions");
var answerSelection1 = document.getElementById("answers1") 
var answerSelection2 = document.getElementById("answers2") 
var answerSelection3 = document.getElementById("answers3") 
var answerSelection4 = document.getElementById("answers4") 
var answerSelection3 = document.getElementById("answers5") 
var answerSelection4 = document.getElementById("answers6") 

var currentQuestion = 0; //this will need to be increase by 1

var questionHeaders = ["What does RGB stand for?","What are Pseudo Classes?","What are JavaScript Date Types","Which of the following is a Window Object Method?","What tag is used to change the title of a webpage?","What is the correct way to write an Anchor Tag?"]

var answers1 = [ "bob", "", "", "" ];
var answers2 = [];


// set first question text

function setQuestion(currentQuestion) {
    
    // Set question header = questionHeaders[currentQuestion]

    if (currentQuestion == 0) {
       answerSelection1.textContent = answers1[0];
       answerSelection2.textContent = answers1[1];
       answerSelection3.textContent = answers1[2];
       answerSelection4.textContent = answers1[3];
    }
    if (currentQuestion == 1) {
        answerSelection1.textContent = answers2[0];
        answerSelection2.textContent = answers2[1];
        answerSelection3.textContent = answers2[2];
        answerSelection4.textContent = answers2[3];
    }
    if (currentQuestion == 2) {
        answerSelection1.textContent = answers3[0];
        answerSelection2.textContent = answers3[1];
        answerSelection3.textContent = answers3[2];
        answerSelection4.textContent = answers3[3];
    }
    if (currentQuestion == 3) {
        answerSelection1.textContent = answers4[0];
        answerSelection2.textContent = answers4[1];
        answerSelection3.textContent = answers4[2];
        answerSelection4.textContent = answers4[3];
    }
    if (currentQuestion == 4) {
        answerSelection1.textContent = answers5[0];
        answerSelection2.textContent = answers5[1];
        answerSelection3.textContent = answers5[2];
        answerSelection4.textContent = answers5[3];
    }
    if (currentQuestion == 5) {
        answerSelection1.textContent = answers6[0];
        answerSelection2.textContent = answers6[1];
        answerSelection3.textContent = answers6[2];
        answerSelection4.textContent = answers6[3];
    }
}


 if (answer1 === answer1);
 // progress the quiz say it right

 if (answer1 === answers2)
 // same thing decrease the timer and say it wrong

var generateBtn = document.querySelector("#generate"); //change to the ids in li (answer1)
generateBtn.addEventListener("click", );

//create event listeners for answer buttons

//call setQuestionText using eventlistner to change tp next question

//Think about how to store each answer right or wrong

//How do i tell what button was clicked and compare to the answer


























