document.getElementById("header-container").style.backgroundColor = "green";
document.getElementById("footer-container").style.backgroundColor = "darkGreen";
let divs = document.getElementsByTagName('div');
let emergencyTasks = document.getElementsByTagName('h3');

for (let i = 0; i < divs.length && i <= 3; i += 1) {
    divs[i].style.backgroundColor = "pink";
    if (i > 1 && i <= 3) {
        divs[i].style.backgroundColor = "yellow";
    }
}

for (let k = 0; k <= emergencyTasks.length; k += 1) {
    emergencyTasks[k].style.backgroundColor = "purple";
    if (k > 1 && k <= 3) {
        emergencyTasks[k].style.backgroundColor = "black";
    }
}

