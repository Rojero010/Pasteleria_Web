$(document).ready(function(){
  tablaInventario = $("#tablaInventario").DataTable({
     "columnDefs":[{
      "targets": -1,
      "data":null,
      "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-secondary btneditar'><i class='fas fa-edit'></i></button><button class='btn btn-danger btnborrar'><i class='fas fa-trash-alt'></i></button></div></div>"  
     }],
      
      //Para cambiar el lenguaje a español
    "language": {
          "lengthMenu": "Mostrar _MENU_ registros",
          "zeroRecords": "No se encontraron resultados",
          "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "infoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sSearch": "Buscar:",
          "oPaginate": {
              "sFirst": "Primero",
              "sLast":"Último",
              "sNext":"Siguiente",
              "sPrevious": "Anterior"
           },
           "sProcessing":"Procesando...",
      }
  });

});
