function Open() {
  let lista = document.querySelector("ul");
  let menu = document.querySelector(".menu");

  if (lista.style.display == "none") {
    lista.style.display = "flex";
    menu.src = "./assets/images/menu-buguer-close.svg";
  } else {
    lista.style.display = "none";
    menu.src = "./assets/images/menu-buguer-open.svg";
  }
}
