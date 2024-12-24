// script.js

// Function to append values to the display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to toggle between dark and light mode
// script.js

// Function to toggle dark mode/light mode
const toggleSwitch = document.getElementById('theme-switch');
const switchLabel = document.querySelector('.switch-label');

// Initially set the theme based on the checkbox state
if (toggleSwitch.checked) {
    switchLabel.textContent = "🌙"; // Dark mode icon
} else {
    switchLabel.textContent = "🌞"; // Light mode icon
}

toggleSwitch.addEventListener('change', () => {
    // Toggle dark mode class on body and other elements
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
    document.querySelector('.display').classList.toggle('dark-mode');

    // Change the icon depending on the theme
    if (toggleSwitch.checked) {
        switchLabel.textContent = "🌙"; // Dark mode icon
    } else {
        switchLabel.textContent = "🌞"; // Light mode icon
    }
});
