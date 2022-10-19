const activeList = document.querySelector('.dropdown__value');
const listMenu = document.querySelector('.dropdown__list');
const listItems = Array.from(document.querySelectorAll('.dropdown__item'));

function toggleClassList() {
	listMenu.classList.toggle('dropdown__list_active');
};

activeList.addEventListener('click', toggleClassList);

function activeValue(event) {
	event.preventDefault();
	let target = event.target;
	listMenu.classList.remove("dropdown__list_active");
	activeList.textContent = target.textContent;
	return false;
};

listItems.forEach(item => {
	item.addEventListener("click", activeValue);
});