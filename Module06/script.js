let count = 0;

function changeText() {
    count = count + 1;
    document.getElementById("message").textContent =
        "Button clicked " + count + " times";
}

function resetCount() {
    count = -1; // Wanted to use the already defined changeText, since count is always incremented
    // by 1 in changeText, set to -1 so that before the text updates count will be set to 0
    changeText(); // Use already defined function
}

let header = document.getElementById("title");
header.textContent = "This text was set using JavaScript";
