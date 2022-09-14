var sideIp = document.querySelectorAll(".side-input");
var btnCal = document.querySelector("#btn-calculate");
var opTxt = document.querySelector("#out-txt");

function calcyMultiply(a,b) {
    var sumSq = a*b ;
    return sumSq;
} 

function calcyArea() {
    var sumSq = calcyMultiply(Number(sideIp[0].value),Number(sideIp[1].value));
    var arOfTriangle = 0.5*sumSq;
    opTxt.innerText = "Area of triangle is " + arOfTriangle;
}

btnCal.addEventListener('click', calcyArea);