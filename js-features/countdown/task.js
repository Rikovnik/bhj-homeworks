const timeCounter = document.getElementById("timer");
let count = Number(timeCounter.textContent);

const counter = setInterval(timer, 1000);

function timer() {
	
	count = count - 1;
	timeCounter.textContent = count;

	if (count <= 0) {
		clearInterval(counter);
		alert("Вы победили в конкурсе");
		return;
	}
};
