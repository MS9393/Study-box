const h1 = document.querySelector(".hello h1");

function handleH1Click() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleH1Click);