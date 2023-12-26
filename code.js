let item = document.getElementById("no");

function change() {
    item.style.left = `${(Math.random() * window.innerWidth) - 300}px`;
    item.style.top = `${(Math.random() * window.innerHeight) - 300}px`;
}

item.addEventListener("mouseover", change);
