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
}




inputElement.addEventListener('input', textNumber);