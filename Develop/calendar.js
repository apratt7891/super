function displayDate() {
    document.getElementById("currentDay").innerHTML =
    Date();
  }
  $('.modal-container').toggle()
  $('.modal-conter--close').click(function() {
      $('.modal-container').css('display', 'none')
  })