document.getElementById("currentDay").innerHTML =
 Date();

tasks = {};

$(".saveBtn").on("click", function() {

    var saveTask = $("textarea")
    .val();
    localStorage.setItem("tasks", JSON.stringify(tasks));
   
});

