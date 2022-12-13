$(document).ready(function() {

    $("#checkoutForm").submit(function(e){
        e.preventDefault()
        $("#notloading").hide()
        $("#loading").show()

        $.ajax('/create-checkout', {
            type: 'POST',
            data: {
                'u_full_name': $("#u_full_name").val(),
                'user_email': $("#user_email").val(),
                'user_full_address': $("#user_full_address").val(),
            }, 
            success: function (data, status, xhr) {
                window.location.href = data.data.redirect_url;
            },
            error: function (jqXhr, textStatus, errorMessage) {
                $("#notloading").show()
                $("#loading").hide()
                console.log('Error' + errorMessage);
            }
        });
    });

});

