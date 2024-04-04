
//const squareCount = 256;


function createSquareBox(size) {
    const container = document.querySelector("#container");
    container.style.setProperty("--size", size);
    const squareCount = size * size;
    for (let i = 0; i < squareCount; i++) {
        const newSquareBox = document.createElement("div");
        newSquareBox.className = "square";
        container.appendChild(newSquareBox);
        
        newSquareBox.addEventListener("mouseover", () => {
            newSquareBox.style.backgroundColor = "red";
        });

        newSquareBox.addEventListener("mouseout", ()=> {
            newSquareBox.style.backgroundColor = "aqua";
        });
              
    }
}

createSquareBox(50);