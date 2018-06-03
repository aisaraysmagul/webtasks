function add(){
	const name = document.querySelector('#name').value;
	const surn = document.querySelector('#surname').value;
	const fact = document.querySelector('#faculty').value;
	const stud = document.querySelector('#students');
    const row=document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    cell1.textContent = name;
    cell2.textContent = surn;
   	cell3.textContent = fact;
   	if(name==='' || surn==='' || fact==='-1'){
   		if (name === ''){
	    	const red = document.querySelector("#name");
	    	red.className = "error";
	    }
	    if (surn=== ''){
	    	const red = document.querySelector("#surname");
	    	red.className = "error";
	    }
	    if (fact=== '-1'){
	    	const red = document.querySelector("#faculty");
	    	red.className = "error";
	    }
   	}
    else{
    	row.appendChild(cell1);
	    row.appendChild(cell2);
	    row.appendChild(cell3);
	    stud.appendChild(row);    
	    }    
  }