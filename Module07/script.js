const button = document.getElementById("btn");
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

const submitButton = document.getElementById("submitBtn");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formFeedback = document.getElementById("formFeedback");

button.addEventListener("click", function () {
    output.textContent = "Button was clicked!";
    button.textContent = "You clicked me!"
});

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() === "") {
        greeting.textContent = "";
    }
    else {
        greeting.textContent = "Hello, " + nameInput.value;
    }
});

submitButton.addEventListener("click", function () {
if ((message.value.trim() === "") ||  (email.value.trim() === "")) {
    formFeedback.textContent = "Please fill in both fields";
}
else if (!email.value.includes("@")) {
    formFeedback.textContent = "Please enter a valid email address";
}
else {
    formFeedback.textContent = "Thank you! Your message has been sent.";
}
});