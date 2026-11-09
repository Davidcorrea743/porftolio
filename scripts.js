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
// Formulario de contacto: envía con Formspree si está configurado,
// si no, abre el cliente de correo con el mensaje ya redactado.
const formContacto = document.getElementById("form-contacto");
if (formContacto) {
  const estado = document.getElementById("form-estado");
  const boton = formContacto.querySelector('button[type="submit"]');
  const EMAIL_DESTINO = "davidcorrea.743@gmail.com";

  const mostrarEstado = (texto, tipo) => {
    estado.textContent = texto;
    estado.className = `form-estado ${tipo}`;
  };

  formContacto.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const datos = new FormData(formContacto);
    if (datos.get("_gotcha")) return; // probable bot

    // Formspree aún no configurado: usar mailto como respaldo
    if (formContacto.action.includes("TU_FORM_ID")) {
      const cuerpo = [
        datos.get("mensaje"),
        "",
        `— ${datos.get("nombre")}`,
        datos.get("email"),
        datos.get("telefono") || "",
      ].join("\n");
      window.location.href =
        `mailto:${EMAIL_DESTINO}` +
        `?subject=${encodeURIComponent(datos.get("tema"))}` +
        `&body=${encodeURIComponent(cuerpo)}`;
      mostrarEstado("Abriendo tu aplicación de correo…", "ok");
      return;
    }

    boton.disabled = true;
    mostrarEstado("Enviando…", "");
    try {
      const respuesta = await fetch(formContacto.action, {
        method: "POST",
        body: datos,
        headers: { Accept: "application/json" },
      });
      if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
      formContacto.reset();
      mostrarEstado("¡Gracias! Tu mensaje fue enviado. Te responderé pronto.", "ok");
    } catch (error) {
      mostrarEstado(
        `No se pudo enviar el mensaje. Escríbeme directamente a ${EMAIL_DESTINO}.`,
        "error",
      );
    } finally {
      boton.disabled = false;
    }
  });
}
