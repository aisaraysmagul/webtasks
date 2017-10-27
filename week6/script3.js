let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
let garage = document.querySelector('#cars');
const basket = "C:/Users/acer e15/Desktop/webtasks/week6/basket.png";
const dollar = "C:/Users/acer e15/Desktop/webtasks/week6/dollar.png";
var items = document.querySelector("#items");
var sum = document.querySelector("#sum");
let ind;
for (var i = 0; i < cars.length; i++) {
    var section = document.createElement('section');
    var img = document.createElement('img');
    var brand = document.createElement('h1');
    var model = document.createElement('h1');
    var bimg = document.createElement('img');
    var price = document.createElement('h1');
    
    price.innerHTML=cars[i].price;
    brand.innerHTML=cars[i].brand;
    model.innerHTML=cars[i].model;
    
    bimg.className="basket";
    bimg.src=basket;
    bimg.width=40;
    bimg.height=28;
    price.className="price";
    img.src=cars[i].image_url;
    img.width=100;
    img.height=60;
    
    var name = brand.innerHTML+" " + model.innerHTML;
    
    section.className="card";
    section.append(img);
    section.append(name);
    section.append(bimg);
    section.append(price);
    garage.append(section);
}
function open(event) {
    var image = event.currentTarget;
    var prices = event.currentTarget.parentNode.querySelector('.price');
    ind = event.currentTarget.parentNode.dataset.index;
    console.log(ind);
    if (ind === "buy"){
        image.src = basket;
        items.innerHTML = parseInt(items.innerHTML)-1;
        sum.innerHTML=parseInt(sum.innerHTML)-parseInt(prices.innerHTML);
        ind = "sell";
    }
    else{
        image.src=dollar;
        items.innerHTML=parseInt(items.innerHTML)+1;
        sum.innerHTML=parseInt(sum.innerHTML)+parseInt(prices.innerHTML);
        ind = "buy";
    }
    ind = "buy";
    
}
for (var index = 1; index < (garage.childNodes.length); index++) {
    garage.childNodes[index].childNodes[2].addEventListener('click', open);
}
  