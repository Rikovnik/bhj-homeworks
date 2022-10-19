const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function activTabs(event) {
	let i = tabs.findIndex((tab) => tab.classList.contains("tab_active"));
	tabs[i].classList.remove("tab_active");
	tabContent[i].classList.remove("tab__content_active");
	event.currentTarget.classList.toggle("tab_active");
  index = tabs.findIndex((item) => item.classList.contains("tab_active"));
  tabContent[i].classList.toggle("tab__content_active");
};

tabs.forEach((item) => item.addEventListener("click", activTabs));


