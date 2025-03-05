document.getElementById('change-theme').addEventListener('click', function () {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
})