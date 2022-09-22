var angleIp = document.querySelectorAll(".angle-input");
var btnCheck = document.querySelector("#btn-check");
var outTxt = document.querySelector("#output-txt");


function sumOfAngles( angle1st, angle2nd , angle3rd ) {
    var summ = angle1st + angle2nd + angle3rd ;
   
    return summ;
};

function checkTriangle() {
    var summ = sumOfAngles(Number(angleIp[0].value),Number(angleIp[1].value),Number(angleIp[2].value));
    if (angleIp.value>0 && angleIp.value !="") {
        if (summ===180) {
            outTxt.innerText = "It forms a Triangle!!!😁"        
        } else {
            outTxt.innerText = "No triangle is formed 😞"
        }
    }else{
        outTxt.innerText = "Given input angle should be greater than zero";
    }
    
};


btnCheck.addEventListener("click", checkTriangle)
