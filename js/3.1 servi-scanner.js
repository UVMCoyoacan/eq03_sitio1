function agendarCitaYWhatsApp(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener la fecha y hora seleccionada
    var fechaSeleccionada = new Date(document.getElementById('fecha').value);
    
    // Formatear la fecha y hora
    var dia = fechaSeleccionada.getDate();
    var mes = fechaSeleccionada.toLocaleString('default', { month: 'long' });
    var año = fechaSeleccionada.getFullYear();
    var hora = fechaSeleccionada.getHours();
    var minutos = fechaSeleccionada.getMinutes();
    
    // Convertir la hora al formato de 12 horas (con "am" o "pm")
    var am_pm = hora >= 12 ? 'pm' : 'am';
    hora = hora % 12 || 12; // Convertir la hora a un formato de 12 horas
    
    // Agregar cero inicial si los minutos son menores que 10
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Redirigir a WhatsApp con el mensaje prefijado y la fecha seleccionada
    var telefonoWhatsApp = '5513045263'; // Reemplazar con tu número de WhatsApp
    var mensajeWhatsApp = encodeURIComponent('¡Hola buen día! Quisiera agendar una cita para el día ' + dia + ' de ' + mes + ' de ' + año + ', a las ' + hora + ':' + minutos + ' ' + am_pm + ', para un servicio de Scanner. ¿Tendrá disponibilidad?');
    var urlWhatsApp = 'https://wa.me/' + telefonoWhatsApp + '?text=' + mensajeWhatsApp;
    window.location.href = urlWhatsApp;}
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