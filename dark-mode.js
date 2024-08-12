const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        toggleButton.innerHTML = "Dark Mode"
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.innerHTML = "Light Mode"
    }
});
