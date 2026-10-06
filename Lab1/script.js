const welcomeBtn = document.getElementById('welcomeBtn');
const welcomeText = document.getElementById('welcomeText');

welcomeBtn.addEventListener('click', () => {
    welcomeText.textContent = 'Welcome to my site';
});