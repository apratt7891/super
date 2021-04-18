document.getElementById("currentDay").innerHTML =
 Date();


 /* Using JQuery to get text/time data that will save when clicking on saveBtn */
 $(document).ready(function () {
   
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        /* Save text in local storage */
        localStorage.setItem(time, text);
    })
   


    /* Get text from local storage */
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));

   
})
