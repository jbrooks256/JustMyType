$(document).ready(function () {
    
    $("#keyboard-upper-container").hide();

    $(document).keydown(function (e) {
        if (e.keyCode = 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }; 
    });
    
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }; 
    });

})