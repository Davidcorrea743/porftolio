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
// Funcion que aplica o reinicia las animaciones de las habilidades
function toggleHabilidades(activar) {
  const habilidades = document.getElementsByClassName("progreso");
  const clases = [
    "javascript",
    "htmlcss",
    "react",
    "node",
    "nestjs",
    "python",
    "django",
    "apis",
    "databases",
    "gitlinux",
    "web3",
    "comunicacion",
    "trabajo",
    "creatividad",
    "dedicacion",
    "proyect",
  ];

  for (let i = 0; i < habilidades.length; i += 1) {
    if (activar) {
      habilidades[i].classList.add(clases[i]);
    } else {
      habilidades[i].classList.remove(clases[i]);
    }
  }
}

const skillsSection = document.getElementById("skills");
if (skillsSection && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toggleHabilidades(true);
        } else {
          toggleHabilidades(false);
        }
      });
    },
    { threshold: 0.35 },
  );

  observer.observe(skillsSection);
} else {
  // Fallback basico para navegadores sin IntersectionObserver
  window.onscroll = function () {
    toggleHabilidades(true);
  };
}
