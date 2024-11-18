// Función para abrir el modal
function openModal(videoId) {
    document.getElementById(videoId).style.display = "block";
  }
  
  // Función para cerrar el modal
  function closeModal(videoId) {
    document.getElementById(videoId).style.display = "none";
  }
  
  // Cerrar el modal si se hace clic fuera del contenido
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
    }
  };