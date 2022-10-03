# api-quiz

## Deployed Link
https://peterm012.github.io/api-quiz/

## Site Picture
![API Quiz](https://user-images.githubusercontent.com/110750833/193619879-6de11820-e1f2-4016-add8-5c12cd425ab0.gif)

## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elements on page
- JS - Used to create interactions and animations on webpage 
- WEB API - Used to save on the local storage
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to Github Pages

## To Do
Make a code taking quiz
When the start button is clicked a timer starts and a question is presented
When a question is answered another question is presented
When a question is answered incorrectly time is subtracted from the timer
When all questions are answered or the timer reaches 0 the game is over
When the game is over the user can save their initials and the score is recorded

## Summary 
This project was to create a timed quiz on JavaScript fundamentals that stores high scores. To begin this task I had to spend some time reading different articles such as W3 and MDN. After reviewing the material I was going to need I utilizing Javascript to execute what was needed. In order to complete this task I had to use an assortment of HTML DOM, Attributes, and Local Storage. I used console.log() to make sure my code stayed true. During my research I discovered how to local storage in order to save and record highscores. To give the test a sense of urgency I added in a timer. I added in a line of code that reduced the timer when the user answered the question wrong. To add to this I also added an alert message if the timer was to show "0" before the test is completed. I felt the most challenging task to overcome for this task was getting the displayed questions and answers to change after every selection. Something that I took away from this was how to set event listeners in functions. If the I feel at the end of this I have achieved a better understanding of Javascript and Attributes. Below is my code for the highscores for loop.

## Code Snippet
JS
```js
//this is the submit button that allows the player to save and check scores 
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    cardHeader.setAttribute('style', "display: none;");
    var j = 5
var entry = document.getElementById('score').value;
    localStorage.setItem("entry", entry);
    list.push(entry + ": " + timeLeft);
    localStorage.setItem("list", JSON.stringify(list))
    console.log(entry)
for (let i = 0; i < 5; i++) { 
    let li=document.createElement("li");
    scoreList.appendChild(li);
    li.textContent=list[list.length-j]
    j--
    }
    submitBtn.setAttribute('style', "display: none;");
});


```
