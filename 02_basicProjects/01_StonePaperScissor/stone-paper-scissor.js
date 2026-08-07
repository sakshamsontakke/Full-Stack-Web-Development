let options = document.querySelectorAll(".gameOptions");
let output = document.querySelectorAll(".playerOutput");
let emojies = document.querySelectorAll(".emoji");
let results = document.getElementById("resultId");
let computerTurn = Math.floor(Math.random()*3);

options.forEach((option , index) =>{
    option.addEventListener("click", ()=>{
        output[0].innerHTML = emojies[index].innerHTML ;
        output[1].innerHTML = emojies[computerTurn].innerHTML ;
        if(output[0].innerHTML == output[1].innerHTML){
            results.innerHTML = "DRAW!!";
            console.log("draw")
        }
        else if(output[0].innerHTML == emojies[0].innerHTML && output[1].innerHTML == emojies[1].innerHTML){
            results.innerHTML = "COMPUTER WON!!";
            results.style.color = "red";
        }
        else if(output[0].innerHTML == emojies[0].innerHTML && output[1].innerHTML == emojies[2].innerHTML){
            results.innerHTML = "YOU WON!!";
            results.style.color = "green";
        }
        else if(output[0].innerHTML == emojies[1].innerHTML && output[1].innerHTML == emojies[0].innerHTML){
            results.innerHTML = "YOU WON!!";
            results.style.color = "green";
        }
        else if(output[0].innerHTML == emojies[1].innerHTML && output[1].innerHTML == emojies[2].innerHTML){
            results.innerHTML = "COMPUTER WON!!";
            results.style.color = "red";
        }
        else if(output[0].innerHTML == emojies[2].innerHTML && output[1].innerHTML == emojies[0].innerHTML){
            results.innerHTML = "COMPUTER WON!!";
            results.style.color = "red";
        }
        else if(output[0].innerHTML == emojies[2].innerHTML && output[1].innerHTML == emojies[1].innerHTML){
            results.innerHTML = "YOU WON!!";
            results.style.color = "green";
        }
        setTimeout(()=>{
            output[0].innerHTML = "?";
            output[1].innerHTML = "?";
            results.innerHTML = "play the game!!"
            results.style.color = "white";
            computerTurn = Math.floor(Math.random()*3);
        } , 1000)
    
    })
})