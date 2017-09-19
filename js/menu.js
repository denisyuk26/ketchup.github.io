var menumob="close";

$(document).ready(function(){
    $(".menu-mob").on("click", showMmenu);
    $("#openmap").on("click", openMap);
    $("#closemap").on("click", closeMap);





    function openMap() {
        if (menumob =="close"){
            $("#myMap").css ({
                "position": "relative"
            });
            $(".form-wrap").css({
                "display":"none"
            });

            $(".closemap").animate ({
                "opacity": "1"
            }, 500);
            menumob = "open";
        }

    }

    function closeMap() {
        $("#myMap").css({
            "position": "absolute"

        });
        $(".form-wrap").css ({
            "display": "block"
        });

        $(".closemap").animate ({
            "opacity": "0"
        }, 500);

        menumob = "close";
    }



    function showMmenu(){
        if (menumob =="close") {
            $(this).animate({
                'top': 0
            },500);
            menumob = "open";
            $('.open').fadeOut(250);
            $('.close').fadeIn(250);
        }
        else {
            $(this).animate({
                "top": "-255px"
            },500);
            menumob = "close";
            $('.open').fadeIn(250);
            $('.close').fadeOut(250);
        }


    }


});
