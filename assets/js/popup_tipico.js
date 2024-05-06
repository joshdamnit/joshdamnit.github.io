var modal = document.getElementById("myModal");

var btn20 = document.getElementById("btn20");
var btn21 = document.getElementById("btn21");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks the button, open the modal 


btn20.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Tipico_Moodfilm.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn21.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Tipico_2022_30s.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.querySelector('video').pause();
  document.querySelector('video').currentTime = 0;
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector('video').pause();
    document.querySelector('video').currentTime = 0;
  }
}



