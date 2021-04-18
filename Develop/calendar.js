document.getElementById("currentDay").innerHTML =
 Date();


$(".saveBtn").on("click", function() {

    var task = $("textarea")
    .val();
    localStorage.setItem("task", JSON.stringify(task));
   
      
});
