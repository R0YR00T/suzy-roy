let item = document.getElementById("no");

function change() {
    item.style.left = `${Math.random() * window.innerWidth}px`;
    console.log(window.innerWidth, item.style.left);
    item.style.top = `${Math.random() * window.innerHeight}px`;
    console.log(item.style.top);
}

item.addEventListener("mouseover", change);

console.log(window.innerWidth);
console.log(screen.innerWidth);
console.log(VisualViewport.innerWidth);