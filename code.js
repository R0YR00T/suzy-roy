let item = document.getElementById("no");

function change() {
    item.style.left = `${(Math.random() * window.innerWidth) - 500}px`;
    item.style.top = `${(Math.random() * window.innerHeight) - 500}px`;
}

item.addEventListener("mouseover", change);
