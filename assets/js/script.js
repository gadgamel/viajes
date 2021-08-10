$(function(){
    $("a").click(function(event) {
    // Con este if se asegura que this.hash tenga un valor antes de anular
    //el comportamiento predeterminado
    if (this.hash !== "") {
    // Previene el comportamiento de click predeterminado
    event.preventDefault();
    // Guarda el valor del hash en una variable llamada gato
    var gato = this.hash;
    // Usa el método animate para animar el scroll y hacerlo de una
    //forma suave
    // El número opciona (800) especifica el número de milisegundos que
    //se demorara en llegar hasta el área
    $('html, body').animate({
    scrollTop: $(gato).offset().top
    }, 800, function(){
        // Agrega hash (#) a la URL cuando haya terminado de desplazarse
//(comportamiento de click predeterminado)
window.location.hash = gato;
});
} // Fin del if
});
});



// $(function () {
//     $('[data-toggle="tooltip"]').tooltip();

//     $('#quienesomos').click(function(){
//         alert("Somos la mejor compñia de viajes de viajes")
//     });

//     $('#destacados').click(function(){
//         alert("Comparte los mejores lugares de Chile")
//     });
    
//     $('#contactos').click(function(){
//         alert("Contactanos")
//     });
    
//     $('.titulo1').click(function(){
//         $('.texto1').toggle();
//     });
//     $('.titulo2').click(function(){
//         $('.texto2').toggle();
//     });
//     $('.titulo3').click(function(){
//         $('.texto3').toggle();
//     });
    
//     $(".switch").click(function(){
//         $(".switch").slideToggle(1500); 
//         $(".switch").toggle('show');
//     });
//     $("switch2").click(function(){
//         $(".switch2").slideToggle(1500); 
//         $(".switch2").toggle('show');
//     });
//     $(".switch3").click(function(){
//         $(".switch3").slideToggle(1500); 
//         $(".switch3").toggle('show');
//     });
    
  
//   })