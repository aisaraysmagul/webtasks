let cars = [{brand:'Toyota',model:'Camry','year':1999,price:20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
let t = document.querySelector("#cars");
var x = 0;
let price;
function def(){
	for (var i = 0, len = cars.length; i < len; i++) {
		let all = document.createElement("div");
		let img = new Image(140,100);
		img.src = cars[i].image_url;
		img.style.marginBottom = "20px";
		img.style.display = "flex";
		all.appendChild(img);
		all.className="card";

		let brand_n = document.createElement("p");
		brand_n.textContent=cars[i].brand;
		brand_n.style.display = "inline-block";
		brand_n.style.marginRight = "20px";
		brand_n.style.marginLeft = "-190px";
		brand_n.style.fontWeight="bold";
		brand_n.style.fontSize="20px";
		all.appendChild(brand_n);
		all.className="card";

		let model_n = document.createElement("p");
		model_n.textContent=cars[i].model;
		model_n.style.display = "inline-block";
		model_n.style.marginRight = "-50px";
		model_n.style.marginLeft = "-10px";
		model_n.style.fontWeight="bold";
		model_n.style.fontSize="20px";
		all.appendChild(model_n);
		all.className="card";

		let basket="https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png ";
		all.append(basket);
		basket.className="basket";
		t.append(all);
		basket.addEventListener('click', Click);
		price =  document.createElement('p');
		price.innerHTML = cars[i].price;
		price.className = "price";
		console.log(price);
	}
}
function Click(event){
	const img = event.currentTarget;
	const item = document.querySelector('#items');
	item.innerHTML = parseInt(item.innerHTML) + 1;
	img.scr = "https://www.alt-codes.net/images/dollar-sign.png";
	img.removeEventListener('click',Click);
	let total = document.querySelector('#sum');
	total.innerHTML = parseInt(total.innerHTML) + parseInt(price.textContent);
}
def();