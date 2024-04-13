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
function sendWhatsAppMessage() {
    var whatsappMessage = "Hola, estoy interesado(a) en pedir refacciones especializadas para mi moto. Me gustaría recibir más información sobre la disponibilidad y el proceso de pedido. Aquí les dejo los detalles de mi motocicleta y lo que estoy buscando:\n\nMarca y modelo de la moto:\nAño de la moto:\nPiezas específicas que necesito:\nCualquier especificación técnica relevante:\nInformación de contacto:\nEspero su pronta respuesta. ¡Gracias!";
    var whatsappUrl = "https://wa.me/525513045263?text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');
}