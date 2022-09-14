var sideIp = document.querySelectorAll(".side-input");
var btnCal = document.querySelector("#btn-calculate");
var opTxt = document.querySelector("#out-txt");

function calcySqrSum(a,b) {
    var sumSq = a*a + b*b ;
    return sumSq;
} 

function calcyHypo() {
    var sumSq = calcySqrSum(Number(sideIp[0].value),Number(sideIp[1].value));
    var hypoLength = Math.sqrt(sumSq);
    opTxt.innerText = "Hypotenuse of this triangle is " + hypoLength;
}

btnCal.addEventListener('click', calcyHypo);