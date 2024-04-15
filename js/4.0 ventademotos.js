
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
// venta
// JavaScript para modales

function openModal(modalId, imgSrc) {
    var modal = document.getElementById(modalId);
    var modalBackground = document.getElementById("modal-background");
    modal.style.display = "block";
    modalBackground.classList.add("active");
    // Aquí puedes agregar más código si necesitas realizar acciones adicionales al abrir el modal
  }
  
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    var modalBackground = document.getElementById("modal-background");
    modal.style.display = "none";
    modalBackground.classList.remove("active");
    // Aquí puedes agregar más código si necesitas realizar acciones adicionales al cerrar el modal
  }
  
  // Aquí puedes agregar más funciones o código JavaScript según tus necesidades

  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }

  