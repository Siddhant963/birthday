document.getElementById('heart').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('360_F_627480792_wUT08pWzYACPcvLx6p61taKy4M71dOpS.jpg')";
    document.getElementById('heart-container').style.display = 'none';
    document.getElementById('wish-container').style.display = '';
    startCountdown();
});

document.getElementById('play-button').addEventListener('click', function() {
    document.getElementById('birthday-audio').play();
});

function startCountdown() {
    const targetDate = new Date("August 19, 2024 00:00:00").getTime();
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "It's your birthday!";
        }
    }, 1000);
}
