const projects = [
    {
        title: "Responsive Portfolio Website",
        description: "A responsive website created with HTML and CSS."
    },
    {
        title: "Weather App",
        description: "An application that displays weather information."
    },
    {
        title: "Task Manager",
        description: "A tool for organizing daily tasks, and marking which ones are complete or in progress."
    },
    {
        title: "Gym Progress App",
        description: "An app to track progress in the gym and see workouts you can do."
    }
];

function displayProjects() {
    const projectList = document.getElementById("projectList");

    projects.forEach(function(project) {

        const card = document.createElement("div");
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>`;
        
        projectList.appendChild(card);
    });
}

projects[0].description = "A responsive website using HTML, CSS, and JavaScript.";
projects[1].title = "Weather Tracker";
projects.push({
    title: "Timer App",
    description: "An app that allows you to start and stop a stopwatch timer."
});
displayProjects();