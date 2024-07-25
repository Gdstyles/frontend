$(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id"); // this obtiene el evento y de ese evento el id
      $("#detalles" + idBoton).toggle(); // detallesRio
    });


    $(".btn-close").click(function() {
        $(".detalles").hide();
    });


  });