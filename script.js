$( document ).ready(function() {
    $("#my_custom_button").click(function() {
       $("#my_custom_div").toggle();
    });
});

var apiRoot = 'https://still-brook-32091.herokuapp.com/v1/task/':