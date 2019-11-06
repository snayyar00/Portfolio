$(function () {

    // ---------------------------------------------- //
    // Navbar
    // ---------------------------------------------- //

    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });


    // ---------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------- //

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //

    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });



    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    // if ($.cookie("theme_csspath")) {
    //     alternateColour.attr("href", $.cookie("theme_csspath"));
    // }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

        }

        return false;
    });



    $("#contact-form").submit(function(event) {
        var ajaxRequest;
    
        /* Stop form from submitting normally */
        event.preventDefault();
    
        /* Clear result div*/
        $("#result").html('');
    
        /* Get from elements values */
        var values = {
        'name'     : $('input[name=name]').val() ,
        'email'     : $('input[name=email]').val() , 
        'text'     : $('textarea[name=text]').val()
    }
    
        /* Send the data using post and put the results in a div. */
        /* I am not aborting the previous request, because it's an
           asynchronous request, meaning once it's sent it's out
           there. But in case you want to abort it you can do it
           by abort(). jQuery Ajax methods return an XMLHttpRequest
           object, so you can just use abort(). */
           ajaxRequest= $.ajax({
                url: "https://itissid.tech/form.php",
                type: "post",
                data: values
            });
    
        /*  Request can be aborted by ajaxRequest.abort() */
        $("#contact-form").each(function() {
           
            $(this).slideUp(function(){
                $(this).replaceWith(
                        $("<div id='result' style='display:none'>Thanks for conatacting me , I will reach back to you soon </div>").slideDown()
                );
             });
        });

        ajaxRequest.done(function (response, textStatus, jqXHR){
    
             // Show successfully for submit message
             $("#result").html('');
        });
    
        /* On failure of request this function will be called  */
        ajaxRequest.fail(function (){
    
            // Show error
            $("#result").html('There is error while submit');
        });

    
});
});



