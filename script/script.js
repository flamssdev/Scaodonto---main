document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('conteudo').style.display = 'block';
});


window.addEventListener("load", () => {
    const videoDesktop = document.getElementById("video-desktop");
    videoDesktop.play();
    const videoMobile = document.getElementById("video-mobile");
    videoMobile.play();
  
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

const containerDepoimentos = document.getElementById("container-depoimentos");

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


