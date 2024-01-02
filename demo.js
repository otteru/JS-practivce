const inputElement = document.querySelector("input");
const number = document.getElementById("remaining-chars");

const maxAllowedChars = inputElement.maxLength;

function textNumber(e) {
	
	if(e.data){
		number.innerHTML--;
	}else
		number.textContent++;
	// .innerHTML, textContent 둘 다const
}

function updateRemainingCharacters(event){
	const enteredText = event.target.value;
	const enteredTextLength = enteredText.length;
	
	const remainingCharacters = maxAllowedChars - enteredTextLength;
	number.textContent = remainingCharacters;
	
	console.dir(remainingCharacters);
	
	if(remainingCharacters == 0){
		number.classList.add("error");
		inputElement.classList.add("error");
	}else if(remainingCharacters <= 10){
		number.classList.remove("error");
		inputElement.classList.remove("error");
		
		number.classList.add("warning");
		inputElement.classList.add("warning");
	}else{
		number.classList.remove("warning");
		inputElement.classList.remove("warning");
	}
}




inputElement.addEventListener('input', updateRemainingCharacters);