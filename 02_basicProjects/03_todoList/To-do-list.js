let userInput = document.querySelector(".userInput");
let display = document.querySelector(".displayTasks")
let btn = document.querySelector(".btn");
let current = 1;


btn.addEventListener('click' , () => {
    const addTask = document.createElement("div");
    const cross = document.createElement("div");
    
    let task = `${current}. ${userInput.value}`;
    cross.textContent = "x";
    addTask.textContent = task;
    
    addTask.appendChild(cross);
    
    addTask.classList.add("task-list-css");
    display.appendChild(addTask);
    current++;
    
    cross.addEventListener("click", () => {
        addTask.remove();
    })
    
})
