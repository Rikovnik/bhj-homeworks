const menuItems = Array.from(document.querySelectorAll('.menu__link'));
menuItems.forEach((item)=> {
	const itemParent = item.closest('.menu__item');
	const dropDownMenu = itemParent.querySelector('.menu_sub');
	item.onclick = ()=> {
		if (dropDownMenu != null) {
			dropDownMenu.classList.toggle('menu_active');
			return false;
		}
	}
})
