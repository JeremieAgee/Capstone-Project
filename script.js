let rectangle = document.createElement("div");
rectangle.className = "rectangle";
for (let i = 0; i < 6; i++) {
	let side = document.createElement("div");
	side.className = "face face" + i;
	if (i < 4) {
		side.innerHTML = "Jeremie";
	}
	rectangle.appendChild(side);
}
document.body.appendChild(rectangle);
var webCustomer = {
	FirstName: "",
	LastName: "",
	Email: "",
	Description: "",
	Option: "Website",
}
var gameCustomer = {
	FirstName: "",
	LastName: "",
	Email: "",
	Description: "",
	Option: "Game",
}
let fName,
	lName,
	emailAdd,
	description,
	fName1,
	lName1,
	emailAdd1,
	description1;
fName = document.querySelector("#fname1");
lName = document.querySelector("#lname1");
emailAdd = document.querySelector("#email1");
description = document.querySelector("#description1");
fName1 = document.querySelector("#fname2");
lName1 = document.querySelector("#lname2");
emailAdd1 = document.querySelector("#email2");
description1 = document.querySelector("#description2");
btn1 = document.querySelector("#submit1");
btn2 = document.querySelector("#submit2");
btn1.onclick = createWebCustomer;
btn2.onclick = createGameCustomer;
let form1 = document.querySelector("#services-card-1");
let form2 = document.querySelector("#services-card-2");
function createWebCustomer(){
	webCustomer.FirstName = fName.value;
	webCustomer.LastName = lName.value;
	webCustomer.Email = emailAdd.value;
	webCustomer.Description = description.value;
	console.log(webCustomer);
	form1.style.display = "None";
}
function createGameCustomer(){
	gameCustomer.FirstName = fName1.value;
	gameCustomer.LastName = lName1.value;
	gameCustomer.Email = emailAdd1.value;
	gameCustomer.Description = description1.value;
	console.log(gameCustomer);
	form2.style.display = "None";
}

