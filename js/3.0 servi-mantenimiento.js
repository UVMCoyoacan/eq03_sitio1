// DESCARGAR AVISO DE PRIVACIDAD
function descargarterminosycondiciones() {
    // Redirige al usuario a 'pagina-destino.html'
    window.location.href = 'Docs/prueba.pdf';
  }

function descargarterminosycondiciones() {
    // Abre 'pagina-destino.html' en una nueva pestaña
    window.open('Docs/prueba.pdf', '_blank');
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
// REDIRIGIR A NUMERO DE WHATS APP
function redirigir() {
  // Redirigir a la página deseada
  window.location.href = 'https://wa.me/5513045263';
}
// CAMBIAR ENTRE CC
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) { // Cambio aquí: Usar tablinks.length en vez de x.length
      tablinks[i].className = tablinks[i].className.replace(" w3-border-green", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-green";
  }
// BOTON AGENDAR CITA CON MSM DEFINIDO
function agendarCita50cc(event) {
    event.preventDefault();
    const fechaSeleccionada = new Date(document.getElementById('fecha').value);
    const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    const mensaje = encodeURIComponent(`Hola buen día, me interesa saber mas acerca del mantenimiento.  Tendrá disponibilidad para el día ${fechaFormateada}, deseo una cotización sobre una moto 50cc-175cc.`);
    const numeroWhatsApp = '5513045263'; // Reemplazar con el número de teléfono de WhatsApp

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.location.href = url;
}
function agendarCita250cc(event) {
    event.preventDefault();
    const fechaSeleccionada = new Date(document.getElementById('fecha').value);
    const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    const mensaje = encodeURIComponent(`Hola buen día, me interesa saber mas acerca del mantenimiento.  Tendrá disponibilidad para el día ${fechaFormateada}, deseo una cotización sobre una moto 250cc-450cc.`);
    const numeroWhatsApp = '5513045263'; // Reemplazar con el número de teléfono de WhatsApp

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.location.href = url;
}
function agendarCita1000cc(event) {
    event.preventDefault();
    const fechaSeleccionada = new Date(document.getElementById('fecha').value);
    const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    const mensaje = encodeURIComponent(`Hola buen día, me interesa saber mas acerca del mantenimiento.  Tendrá disponibilidad para el día ${fechaFormateada}, deseo una cotización sobre una moto 500cc-1000cc.`);
    const numeroWhatsApp = '5513045263'; // Reemplazar con el número de teléfono de WhatsApp

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.location.href = url;
}