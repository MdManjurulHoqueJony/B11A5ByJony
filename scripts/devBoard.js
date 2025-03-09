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

document.getElementById('btn-clear-history').addEventListener('click', function () {
    document.getElementById('history-div').innerHTML = ``;
})

let total = 0;
document.getElementById('task-container').addEventListener('click', function handleClick(event) {

    if (event.target.disabled === false) {
        alert("Board updated Successfully");        
        total++;
        if (total===6) {
            alert("Congrats!!! You have completed all the current tasks.");
        }
        event.target.disabled = true;

        let assignedTasks = parseInt(document.getElementById('assigned-tasks').innerText);
        assignedTasks--;
        document.getElementById('assigned-tasks').innerText = "0" + assignedTasks;
        let finishedTasks = parseInt(document.getElementById('finished-tasks').innerText);
        finishedTasks++;
        document.getElementById('finished-tasks').innerText = finishedTasks;

        const title = document.getElementById("task-title-" + event.target.id.split("-").pop()).innerText;
        const historyDiv = document.getElementById("history-div");
        const p = document.createElement('p');
        p.innerText=`You have completed the task ${title} at ${new Date().toLocaleTimeString("en-US")}`;
        p.classList.add('bg-[#F4F7FF]');
        p.classList.add('rounded-sm');
        p.classList.add('p-2');
        historyDiv.appendChild(p);
    }
})
