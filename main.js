$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
     })
 
     $('#btn-cancelar').click(function() {
         $('form').slideUp();
      })

      $('form').on('submit', function(e) {
        e.preventDefault()
        const nomeTarefa = $('#nome-tarefa').val()
        const novoItem = $('<li style="display: none"></li>');

        $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
        $('li').click(function() {
            $(this).toggleClass('riscado');
        });
      })

})