console.log("Your index.js file is loaded great");

$(document).ready(function () {
    $(".button").click(function(){
        $(this).addClass("active");

        setTimeout(function(){
            $(".button").addClass("success");
        }, 3700);
        setTimeout(function(){
            $(".button").removeClass("active");
            $(".button").removeClass("success");
        },5000);
        
    });
});