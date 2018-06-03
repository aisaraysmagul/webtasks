function clickMe(){
	const s1 = document.querySelector("#s1");
	const s2 = document.querySelector("#s2");
	const s3 = document.querySelector("#s3");
	const s4 = document.querySelector("#s4");
	const s5 = document.querySelector("#s5");
	const s6 = document.querySelector("#s6");
	const s7 = document.querySelector("#s7");
	const s8 = document.querySelector("#s8");
	const s9 = document.querySelector("#s9");
	let otvet = ((parseInt(s1.value)*parseInt(s5.value)*parseInt(s9.value))+(parseInt(s4.value)*parseInt(s8.value)*parseInt(s7.value))+(parseInt(s2.value)*parseInt(s3.value)*parseInt(s6.value)))-((parseInt(s3.value)*parseInt(s5.value)*parseInt(s7.value))+(parseInt(s6.value)*parseInt(s8.value)*parseInt(s9.value))+(parseInt(s1.value)*parseInt(s2.value)*parseInt(s4.value)));
	document.querySelector('#res').innerHTML=otvet;
}
document.querySelector("#button").addEventListener('click',clickMe);