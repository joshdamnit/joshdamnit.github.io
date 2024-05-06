var modal = document.getElementById("myModal");

var btn28 = document.getElementById("btn28");
var btn29 = document.getElementById("btn29");
var btn30 = document.getElementById("btn30");
var btn31 = document.getElementById("btn31");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks the button, open the modal 


btn28.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Sylter_Toni.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn29.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Sylter_Renate.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn30.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Sylter_Judith.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn31.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Sylter_Sebastian.mp4";
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



