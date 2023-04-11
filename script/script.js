window.addEventListener("load", () => {
    const videoDesktop = document.getElementById("video-desktop");
    videoDesktop.play();
  
}) 


const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  document.getElementById("list-menu").classList.toggle("active");
});

const imagens = document.querySelectorAll(".container-imagem img");
let indiceAtivo = 0;

function alternarImagens() {
  imagens[indiceAtivo].classList.remove("active");
  indiceAtivo = (indiceAtivo + 1) % imagens.length;
  imagens[indiceAtivo].classList.add("active");
  setTimeout(alternarImagens, 3000);
}

alternarImagens();

const menuLista = document.querySelectorAll("#list-menu a");

menuLista.forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementById("list-menu").classList.remove("active");
  });
});

const container = document.getElementById("container-servicos");

container.addEventListener("mouseenter", () => {
  container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  });
});

container.addEventListener("mouseleave", () => {
  container.removeEventListener("wheel");
});

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseup", () => {
  isDown = false;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
});

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});

const containerDepoimentos = document.getElementById("container-depoimentos");

containerDepoimentos.addEventListener("mouseenter", () => {
  containerDepoimentos.addEventListener("wheel", (e) => {
    e.preventDefault();
    containerDepoimentos.scrollLeft += e.deltaY;
  });
});

containerDepoimentos.addEventListener("mouseleave", () => {
  containerDepoimentos.removeEventListener("wheel");
});

let isDownDepoimentos = false;
let startXDepoimentos;
let scrollLeftDepoimentos;

containerDepoimentos.addEventListener("mousedown", (e) => {
  isDownDepoimentos = true;
  startXDepoimentos = e.pageX - containerDepoimentos.offsetLeft;
  scrollLeftDepoimentos = containerDepoimentos.scrollLeftDepoimentos;
});

containerDepoimentos.addEventListener("mouseup", () => {
  isDownDepoimentos = false;
});

containerDepoimentos.addEventListener("mouseleave", () => {
  isDownDepoimentos = false;
});

containerDepoimentos.addEventListener("mousemove", (e) => {
  if (!isDownDepoimentos) return;
  e.preventDefault();
  const x = e.pageX - containerDepoimentos.offsetLeft;
  const walk = x - startXDepoimentos;
  containerDepoimentos.scrollLeftDepoimentos = scrollLeftDepoimentos - walk;
});

containerDepoimentos.addEventListener("wheel", (e) => {
  e.preventDefault();
  containerDepoimentos.scrollLeftDepoimentos += e.deltaY;
});


