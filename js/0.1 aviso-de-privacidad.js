// DESCARGAR AVISO DE PRIVACIDAD
function descargaravisodeprivacidad() {
    // Redirige al usuario a 'pagina-destino.html'
    window.location.href = 'Docs/Aviso de Privacidad.pdf';
  }

function descargaravisodeprivacidad() {
    // Abre 'pagina-destino.html' en una nueva pestaña
    window.open('Docs/Aviso de Privacidad.pdf', '_blank');
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