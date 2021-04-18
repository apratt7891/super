document.getElementById("currentDay").innerHTML =
 Date();



$(".saveBtn").on("click", function() {

    var saveTask = $("textarea")
    .val();
    localStorage.setItem("task", JSON.stringify(task));
   
});

