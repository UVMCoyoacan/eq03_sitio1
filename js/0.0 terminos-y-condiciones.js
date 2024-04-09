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