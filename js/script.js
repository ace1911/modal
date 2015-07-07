var open = document.getElementById('openModal');
var overLay = document.getElementById('overlay');
var close = document.getElementById('closeModal');

function showOrHide(){
	overLay.classList.toggle("hide");
}
	close.addEventListener("click", showOrHide);
	open.addEventListener("click", showOrHide);
