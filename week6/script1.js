function ButClick(event){
	const done = event.currentTarget;
	const but = done.parentNode;
	if (but.getAttribute('data-status')==='done'){
		but.setAttribute('data-status',null);
	}
	else{
		but.setAttribute('data-status','done');
	}
	
}
const buttons = document.querySelectorAll('button');
for (const butt of buttons){
	butt.addEventListener('click',ButClick);
}
