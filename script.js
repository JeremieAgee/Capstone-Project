let rectangle = document.createElement("div");
rectangle.className = "rectangle";
for (let i = 0; i < 6; i++) {
	let side = document.createElement("div");
	side.className = "face face" + i;
    if(i<4){
        side.innerHTML = "Jeremie";
    }
    rectangle.appendChild(side);
}
document.body.appendChild(rectangle);
