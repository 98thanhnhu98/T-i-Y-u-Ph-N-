    //menu1
    $(document).ready(function(){
    $(".row-col1-connect1").hover(function (){
        $(".row-col1-connect1").find("ul:first").slideDown(900)
    }, function (){
        $(".row-col1-connect1").find("ul:first").hide(1000)
    })
})
    //menu2
    $(document).ready(function(){
        $(".menu").hover(function (){
            $(this).find("ul:first").slideDown(900)
        }, function (){
            $(this).find("ul:first").hide(1000)
        })
    })

    $(document).ready(function(){
        $("button").click(function(){
            $("#dp_menu > ul").toggle(500);
            $("#dp_menu").toggleClass("show");
        });
    });
