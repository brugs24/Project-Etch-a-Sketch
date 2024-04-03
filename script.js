const container = document.querySelector("#container");
const squareDivs = 256;

for (let i = 0; i < squareDivs; i++) {
    const newSquareDivs = document.createElement("div");

    newSquareDivs.id = "div-" + i;
    newSquareDivs.className = "square";
    newSquareDivs.style.color = "blue";
    newSquareDivs.textContent = "This is div number " + i;
    newSquareDivs.addEventListener("mouseover", () => {
        newSquareDivs.style.color = "red";
    });

    newSquareDivs.addEventListener("mouseout", ()=> {
        newSquareDivs.style.color = "blue";
    });
    container.appendChild(newSquareDivs);
}