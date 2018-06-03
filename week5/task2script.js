function change(event){
	const click= event.currentTarget;
	const big = document.querySelector('#bigImage');
	big.src = click.src;
	big.width = 500;
	big.hegiht = 300;
}
const image = document.querySelector('#im2');
image.addEventListener('click',change);
const image1 = document.querySelector('#im3');
image1.addEventListener('click',change);
const image2 = document.querySelector('#im4');
image2.addEventListener('click',change);
const image3 = document.querySelector('#im5');
image3.addEventListener('click',change);