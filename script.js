const button = document.querySelector(".gridButton");

button.addEventListener("click", () =>{
    clearSquareBox();
    let size = prompt("Please enter number of square:", "")
    if (size >= 101){
        alert("Entered number is too high");
    }else{
        createSquareBox(size);
    };
    
});

function clearSquareBox() {
    container.innerHTML = "";
}
/* function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
}
const rgbArray = randomRgbColor();
const rgbString = `rgb(${rgbArray.join(', ')})`;
*/
function createSquareBox(size) {
    const container = document.querySelector("#container");
    container.style.setProperty("--size", size);
    const squareCount = size * size;
    for (let i = 0; i < squareCount; i++) {
        const newSquareBox = document.createElement("div");
        newSquareBox.className = "square";
        container.appendChild(newSquareBox);
        newSquareBox.style.border = "0.1px solid black";
        
        newSquareBox.addEventListener("mouseover", () => {
            
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            
            const rgbString = `rgb(${r}, ${g}, ${b})`;
            
            newSquareBox.style.backgroundColor = rgbString;
        });      
    }
    
}
