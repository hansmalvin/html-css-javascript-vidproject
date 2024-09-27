$(document).ready(function(){

    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="bx bx-check" ></i> <i class="bx bx-trash" ></i> </li>');
        $(this).val('')
    });

    $('ul').on('click','.bx-trash',function(){
        $(this).parent('li').fadeOut(100, function(){
            $(this).remove();
        });
    });
    $('ul').on('click','.bx-check',function(){
        $(this).parent('li').toggleClass('checked');
    });

    $('.filter-func').change(function(){
        var filter = $(this).val();

        $('li').each(function(){

            // untuk yang sudah kelar ada apa saja
            filter === "completed" ? $(this).hasClass('checked') 
            ? $(this).show("slow") : $(this).hide("slow") : 
            // 
            filter === "incomplete" ? !$(this).hasClass('checked') 
            ? $(this).show("slow") : $(this).hide("slow") : 
            // all
            $(this).show("slow");
            // $(this).show(2000);
        });
    });
});