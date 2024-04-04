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
            newSquareBox.style.backgroundColor = "wheat";
        });
              
    }
}

