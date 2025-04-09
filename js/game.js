// game.js

// Initialize points
let usePoints = 0;
let resistPoints = 0;

// Update functions
function addUsePoint() {
    usePoints++;
    updateScoreDisplay();
}

function addResistPoint() {
    resistPoints++;
    updateScoreDisplay();
}

// Optional: deduct points if needed
function removeUsePoint() {
    if (usePoints > 0) usePoints--;
    updateScoreDisplay();
}

function removeResistPoint() {
    if (resistPoints > 0) resistPoints--;
    updateScoreDisplay();
}

// Display update
function updateScoreDisplay() {
    document.getElementById('use-points').textContent = usePoints;
    document.getElementById('resist-points').textContent = resistPoints;
}

// Example: hook to buttons (you can customize this per scenario)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-use')?.addEventListener('click', addUsePoint);
    document.getElementById('btn-resist')?.addEventListener('click', addResistPoint);
});
