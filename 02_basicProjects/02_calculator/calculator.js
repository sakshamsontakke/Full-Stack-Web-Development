let buttons = document.querySelectorAll(".btn");
let displayCurrentCalc = document.getElementsByClassName("currentCalulation")[0];
let displayPreviousCalc = document.getElementsByClassName("previousCalculation")[0];

let calculation = "";
let preExpression = calculation;

buttons.forEach((btn , index) => {
    btn.addEventListener("click" , (e) => {
        if(calculation.length > 7){
            displayCurrentCalc.style.fontSize = "40px";
            
        }
        if(e.target.innerHTML === "=" ){
            preExpression = calculation;
            calculation = eval(calculation) + "";
            displayCurrentCalc.innerHTML = calculation;
            displayPreviousCalc.innerHTML = preExpression; 
        }
        else if(e.target.innerHTML == "x"){
            calculation += "*";
            displayCurrentCalc.innerHTML = calculation;
        }
        else if(e.target.innerHTML == "÷"){
            calculation += "/";
            displayCurrentCalc.innerHTML = calculation;
        }
        else if(e.target.innerHTML == "AC"){
            calculation = "";
            preExpression = calculation;
            displayCurrentCalc.innerHTML = calculation;
            displayPreviousCalc.innerHTML = preExpression;
        }
        else if(e.target.innerHTML == "⌫"){
            if(calculation.length <= 1){
                alert("invalid")
            }
            else{
                calculation = calculation.slice(0 , calculation.length-1);
                displayCurrentCalc.innerHTML = calculation;

            }
        }
        else{
            if(calculation.length >= 18){
                alert("maximum limit reached!");
            }
            else{
                calculation += e.target.innerHTML;
                displayCurrentCalc.innerHTML = calculation;
            }
            if(e.target.innerHTML == "%"){
                calculation = parseInt(calculation)/100 + "";
            }
        }
       
            
    })
})