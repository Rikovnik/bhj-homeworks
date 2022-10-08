const modalWindow = document.getElementById('modal_main');
const modalWindowSucc = document.getElementById('modal_success');
const changeWindow = document.querySelector('.show-success');
const winClose = document.getElementsByClassName('modal__close_times');

modalWindow.classList.add('modal_active');

Array.from(winClose).forEach((item)=>{
	item.onclick = ()=>{
		modalWindow.classList.remove('modal_active');
		modalWindowSucc.classList.remove('modal_active');
	}
});

changeWindow.onclick = ()=>{
	modalWindow.classList.remove('modal_active');
	modalWindowSucc.classList.add('modal_active');
}
