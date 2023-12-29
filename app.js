let paragraphElement = document.querySelector("p");

function changeParagraphContext() {
	paragraphElement.textContent = "Clicked";
}

paragraphElement.addEventListener("click", changeParagraphContext);


let inputElement = document.querySelector("input");

function logInputContext(e){
	if(e.key === "Enter"){
		console.log(e);
		//console.log(inputElement.value)
	}
	
}

function logInputContextTwo(e){
	//console.log(inputElement.value);
	//console.log(e.target.value);
	//console.log(e.data);
	console.log(e)
	
}

inputElement.addEventListener('keypress', logInputContext);
inputElement.addEventListener('input', logInputContextTwo);