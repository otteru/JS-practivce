let greetingText = "Hi I'm Yudam";
let age = 32;
let hobbies = ["coding", "movies", "basketball"];
let job = {
	title: "Developer", 
	place: "Sachen", 
	salary: 500
};

let adultAges 

function calculateAdultAges(userAge) {
	return userAge - 18;
}

age = 20;
adultAges = calculateAdultAges(age);
console.log(adultAges);

let person = {
	name: "kim",
	greet() {
		console.log("hello")
	}
}

person.greet();

console.log(greetingText.length);
console.log(greetingText.toUpperCase());