let currentHour = 14;
var message = "";

if(currentHour>= 22) {
    message = "Nao deveriamos comer nada, e hora de dormir";
} else if(currentHour>=18 && currentHour< 22){
    message = "Rango da noite, vamos jantar :D";
} else if(currentHour>=14 && currentHour<18) {
    message = "Vamos fazer um bolo pro cafe da tarde?";
} else if(currentHour>=11 && currentHour< 14) {
    message = "Hora do almoco!!!";
}else{
    message = "Hmmm, cheiro de cafe recem passado";
}
console.log(message)