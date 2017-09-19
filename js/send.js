/**
 * Created by asmodey on 1/15/17.
 */
$('document').ready(function () {
    $('#callback').on('submit', sendMess);
    $('#email1').on('keyup', checkInputs);

});

function sendMess() {
    event.preventDefault();
    $.get(
        "send.php",
        {
            "email" : $('#email1').val()


        },
        function (data){
            if (data==1){
                $('#send-res').html('Ваш запит прийнятно');
                $('#myModal').modal('show');
                setTimeout(function(){
                    $('#myModal').modal('hide');
                }, 3000);

            }
            else {
                $('#send-res').html('Спробуйте ще раз');
                $('#myModal').modal('show');
            }
        }
    );
}

function  checkInputs() {
    var mail = $('#email1').val();
    mail = $.trim(mail);
    if (mail!='') {
        $('form button[name="sendmail"]').removeAttr('disabled');
    }
    else {
        $('form button[name="sendmail"]').attr('disabled', 'disabled');
    }
}



