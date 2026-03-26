let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("react");
    habilidades[3].classList.add("node");
    habilidades[4].classList.add("nestjs");
    habilidades[5].classList.add("python");
    habilidades[6].classList.add("django");
    habilidades[7].classList.add("apis");
    habilidades[8].classList.add("databases");
    habilidades[9].classList.add("gitlinux");
    habilidades[10].classList.add("web3");
    habilidades[11].classList.add("comunicacion");
    habilidades[12].classList.add("trabajo");
    habilidades[13].classList.add("creatividad");
    habilidades[14].classList.add("dedicacion");
    habilidades[15].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
