document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer-display';
    timerDisplay.style.position = 'fixed';
    timerDisplay.style.bottom = '10px';
    timerDisplay.style.right = '10px';
    timerDisplay.style.padding = '10px';
    timerDisplay.style.backgroundColor = '#ACBDDC';
    timerDisplay.style.color = '#fff';
    timerDisplay.style.borderRadius = '5px';
    document.body.appendChild(timerDisplay);

    let startTime = Date.now();

    function updateTimer() {
        let elapsedTime = Date.now() - startTime;
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

        timerDisplay.textContent = `Time on page: ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateTimer, 1000);
});
