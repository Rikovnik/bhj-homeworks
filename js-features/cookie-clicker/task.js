const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
image.onclick = function() {
	let count = Number(counter.textContent);
	counter.textContent = count + 1;
	if (count % 2 != 0) {
		image.width = 200;
	} else {
		image.width = 210;
	}	
}
