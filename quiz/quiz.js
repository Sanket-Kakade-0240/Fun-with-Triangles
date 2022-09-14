var quizForm = document.querySelector(".quiz-form");
var btnSubmit = document.querySelector("#btn-submit");
var opTxt = document.querySelector("#output-txt");

var correctAns = ["90°","right angled"];

function givenAnsScore() {
    var score = 0;
    var i=0;
    var results = new FormData(quizForm);
    for(var value of results.values()){
        if (value === correctAns[i]) {
            score = score + 1 ;
        }
            i = i + 1 ;
        
    } 
    // console.log(score);
    opTxt.innerText = "Your score is " +score ;
}

btnSubmit.addEventListener('click', givenAnsScore);
