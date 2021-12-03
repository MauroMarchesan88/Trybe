document.getElementById("header-container").style.backgroundColor = "green";
document.getElementById("footer-container").style.backgroundColor = "darkGreen"
let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");

for (const task of noEmergencyTasks) {
    noEmergencyTasks[task].style.backgroundColor = "black";
}