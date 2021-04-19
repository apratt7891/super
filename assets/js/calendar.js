
/* using moment.js to get todays date*/
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


 /* Using JQuery to get text/time data that will save when clicking on saveBtn */
 $(document).ready(function () {
   
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        /* Save text in local storage */
        localStorage.setItem(time, text);
    })
    function plannerTimer() {
        /* current time*/
        var currentTime = moment().hours();
    
        /* if/else statements to determine time*/
        $(".time-block").each(function () {
            var timeCal = parseInt($(this).attr("id").split("hour")[1]);
    
            // Add and remove classes depending on time
            if (timeCal  < currentTime) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
            }
            else if (timeCal  === currentTime) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
          })
      }


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

 plannerTimer();  
})
