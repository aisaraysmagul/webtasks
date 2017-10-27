let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
var country = document.getElementById("countries");
var city = document.querySelector("#cities");
window.onload = selectCountry;
country.onchange = selectCountry;
countries.forEach(function(item,i,countries){
	country.innerHTML=country.innerHTML+"<option>"+item+"</option>";
});
function selectCountry(){
  city.innerHTML = "";
  var c = this.value;
  for(let i = 0; i < cities_by_country[c].length; i++){
    o = new Option(cities_by_country[c][i],i,false,false);
    city.add(o);
  };
}
