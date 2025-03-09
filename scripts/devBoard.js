document.getElementById('change-theme').addEventListener('click', function () {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
})

let date = new Date().toDateString();
let first = date.substring(0, date.indexOf(" "));
let rest = date.substring(date.indexOf(" ") + 1);
console.log(first, rest)
document.getElementById("date").innerHTML = `${first},<br><strong>${rest}</strong`;

document.getElementById('btn-discover').addEventListener('click', function () {
    window.location.href = "qa.html";
})
