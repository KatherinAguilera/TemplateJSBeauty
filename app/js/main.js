// (function(){
// 	function nombrar(nombre){
// 		return nombre;
// 	}
// function saludar(nombre){
// 	console.info(nombre, ', un saludo desde aqui')
// }
// saludar(nombrar('Winny Aguilera Morales :D'));
// })();
const $hideButton = document.getElementById('hide');
const $form = document.getElementById('formu');

$hideButton.addEventListener('click', (event) => {
			// console.log(event);
			$form.classList.toggle('active');
});

const $btnMenu = document.getElementById('btn-menu');
const $menu = document.getElementById('menu');

$btnMenu.addEventListener('click', (event) => {
	console.log(event);
	$menu.classList.toggle('active1');
});
	// console.log($hideButton);
	// console.log($form);
