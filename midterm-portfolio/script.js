let todoList = [
    {
        title: "Chess App",
        description: "Develop a chess application that allows a user to play against an AI opponent, or another person using CSS, JavaScript, and HTML.",
        progress: "Completed"
    },
    {
        title: "Task Tracking App",
        description: "Create an app that allows users to create, delete, and edit tasks that they need to complete. The app will allow for different stages of task completion like in progress, completed, and not started.",
        progress: "In Progress"
    },
    {
        title: "Gym Progression App",
        description: "Create an app that allows users to track their gym progress through different metrics. This would include their weight, their personal bests for various lifts, and give them other workouts they can add into their routine.",
        progress: "Not Started"
    
    }
];

function displayTodo() {
    const todoDiv = document.getElementById("project-content");

    if (todoDiv) {
        todoList.forEach(function(todo) {
            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${todo.title} - ${todo.progress}</h3>
                <p>${todo.description}</p>`;
            
            todoDiv.appendChild(card);
        })
    }
}

displayTodo();

let greetingInput = document.getElementById("greeting");
if (greetingInput) {
    greetingInput.addEventListener("input", function() {
        let greetingH = document.getElementById("greetingH");
        if (greetingH) {
            let curGreeting = greetingInput.value;
            if (curGreeting.trim() === "") {
                greetingH.textContent = "Welcome to the Home Page!";
            }
            else {
                greetingH.textContent = `Welcome to the Home Page ${curGreeting.trim()}!`;
            }
        }
    })
}
