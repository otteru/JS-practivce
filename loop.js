for(let i=0; i<10; i++){
	console.dir(i);
}

const users = ["kim", "park", "lee"];

for (const user of users){
	console.log(user);
}

const loggedUser = {
	name: "kim",
	age: "22",
	isAdmin: true
}

for(const propertyName in loggedUser){
	console.log(propertyName);
	console.log(loggedUser[propertyName]);
}

let isFinished = false;

while(!isFinished){//참이면 계속 돌아감
	isFinished = confirm("Do you wanna quit?");
}

console.log("done");