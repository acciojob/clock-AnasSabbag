//your JS code here. If required.

let tim= document.getElementById("timer");
let currDate = new Date();

setInterval(function () {
	currDate = new Date();
	tim.innerHTML= currDate.toLocaleString();
},1000)

