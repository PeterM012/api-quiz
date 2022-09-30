var newQuestion = document.getElementById("questions");
var answerSelection1 = document.getElementById("answers1") 
var answerSelection2 = document.getElementById("answers2") 
var answerSelection3 = document.getElementById("answers3") 
var answerSelection4 = document.getElementById("answers4") 


var currentQuestion = 0; //this will need to be increase by 1

var questionHeaders = ["What does RGB stand for?","What are Pseudo Classes?","What are JavaScript Date Types","Which of the following is a Window Object Method?","What tag is used to change the title of a webpage?","What is the correct way to write an reference?"]

var answers1 = ["red,blue,green", "red giant branch", "red-blue-green", "robust graphics booster"];
var answers2 = [":picture-in-picture", ":enable", "::hover", ":what"];
var answers3 = ["Defined type", "Letter Type", "Noll type", "Symbol type"];
var answers4 = ["Prompt()", "selection()", "moveTo()", "scrollWith()"];
var answers5 = ["</title>", "<head>", "<title>", "<page>"];
var answers6 = ["<a href=('')></a>", "<a href('')></a>", "<a href=()></a>", "<a href=('')><a>"];


// set first question text

function setQuestion(currentQuestion) {
    
    // Set question header = questionHeaders[currentQuestion]

    if (currentQuestion == 0) {
       answerSelection1.textContent = answers1[0];
       answerSelection2.textContent = answers1[1];
       answerSelection3.textContent = answers1[2];// correct answer
       answerSelection4.textContent = answers1[3];
    }
    if (currentQuestion == 1) {
        answerSelection1.textContent = answers2[0];//correct answer
        answerSelection2.textContent = answers2[1];
        answerSelection3.textContent = answers2[2];
        answerSelection4.textContent = answers2[3];
    }
    if (currentQuestion == 2) {
        answerSelection1.textContent = answers3[0];
        answerSelection2.textContent = answers3[1];
        answerSelection3.textContent = answers3[2];
        answerSelection4.textContent = answers3[3];//correct answer
    }
    if (currentQuestion == 3) {
        answerSelection1.textContent = answers4[0];
        answerSelection2.textContent = answers4[1];
        answerSelection3.textContent = answers4[2];//correct answer
        answerSelection4.textContent = answers4[3];
    }
    if (currentQuestion == 4) {
        answerSelection1.textContent = answers5[0];
        answerSelection2.textContent = answers5[1];
        answerSelection3.textContent = answers5[2];//correct answer
        answerSelection4.textContent = answers5[3];
    }
    if (currentQuestion == 5) {
        answerSelection1.textContent = answers6[0];//correct answer
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
setQuestion.addEventListener("click", );

//create event listeners for answer buttons

//call setQuestionText using eventlistner to change to next question

//Think about how to store each answer right or wrong

//How do i tell what button was clicked and compare to the answer


























