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
    if (sideIp[0].value>0 && sideIp[1].value>0) {
        
        opTxt.innerText = "Area of triangle is " + arOfTriangle;
    } else {
        opTxt.innerText = "Given input sides should be greater than zero."
    }
}

btnCal.addEventListener('click', calcyArea);