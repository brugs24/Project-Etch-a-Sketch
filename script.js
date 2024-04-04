const container = document.querySelector("#container");
const squareDivs = 256;

for (let i = 0; i < squareDivs; i++) {
    const newSquareDivs = document.createElement("div");

    newSquareDivs.id = "div-" + i;
    newSquareDivs.className = "square";
    newSquareDivs.addEventListener("mouseover", () => {
        newSquareDivs.style.backgroundColor = "red";
    });

    newSquareDivs.addEventListener("mouseout", ()=> {
        newSquareDivs.style.backgroundColor = "white";
    });
    container.appendChild(newSquareDivs);
}