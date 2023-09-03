let mouseDown = false;

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearGrid);

let sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", setSize);

let container = document.querySelector(".container");

container.onmouseup = function() {
    mouseDown = false;  
}

container.onmousedown = function() {
    mouseDown = true;
}

createGrid(16);

function createGrid(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    for (let i=0; i<size*size; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");
        innerDiv.addEventListener("mousedown", clicked);
        innerDiv.addEventListener("mouseover", clicked);
        container.appendChild(innerDiv);
    }    
}

function clicked(event) {
    if(event.type != "mousedown" && !mouseDown) {
        return;
    }
    else {
        event.target.classList.add("clicked");
    }
}

function clearGrid() {
    let gridBoxes = document.querySelectorAll(".innerDiv");
    gridBoxes = Array.from(gridBoxes);
    gridBoxes.map(box => {
        box.classList.remove("clicked");
        console.log(box.classList);
    });
}

function setSize() {
    let size = parseInt(prompt("Enter size: "))
    if (size > 100 || size < 2) {
        return
    }
    container.innerHTML = "";
    createGrid(size);
}