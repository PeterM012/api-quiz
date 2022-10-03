# api-quiz

## Deployed Link
https://peterm012.github.io/api-quiz/

## Site Picture 
![image](https://user-images.githubusercontent.com/110750833/192899393-17f0b1cc-6754-403f-8b3d-1b4bd1218ac8.png)

## Technologies Used
- HTML - Used to create elements on the DOM
- CSS - Styles html elemnts on page
- JS - Used to create interactions and animations on webpage 
- WEB API - Used to save on the local storage
- Git - version control system to track changes to source code
- GitHub - hosts reposiory that can be deployed to Github Pages

## To Do


## Summary 
This project was to create a deployed 

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
