$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienesomos').click(function(){
        alert("Somos la mejor compñia de viajes de viajes")
    });

    $('#destacados').click(function(){
        alert("Comparte los mejores lugares de Chile")
    });
    
    $('#contactos').click(function(){
        alert("Contactanos")
    });
    
    $('.titulo1').click(function(){
        $('.texto1').toggle();
    });
    $('.titulo2').click(function(){
        $('.texto2').toggle();
    });
    $('.titulo3').click(function(){
        $('.texto3').toggle();
    });
    
    $(".switch").click(function(){
        $(".switch").slideToggle(1500); 
        $(".switch").toggle('show');
    });
    $("switch2").click(function(){
        $(".switch2").slideToggle(1500); 
        $(".switch2").toggle('show');
    });
    $(".switch3").click(function(){
        $(".switch3").slideToggle(1500); 
        $(".switch3").toggle('show');
    });
    
  
  })