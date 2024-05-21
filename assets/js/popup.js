


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");
var btn35 = document.getElementById("btn35");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/js_showreel_2024.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn2.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/siemens.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn3.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/fressnapf.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn4.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Sylter_Toni.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn5.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/allianz_heidi.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn6.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/frosta.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn8.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/engel_voelkers_christoph.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn9.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Allianz_Nachhaltigkeit.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn10.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/voltactive.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn11.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Backsau.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn12.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/zdk.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn13.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/SkinGin.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn14.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/centrum.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}

btn15.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/Allianz_Unfallsimulator.mp4";
  document.getElementById("reel").load();
  modal.style.display = "block";
  document.getElementById('reel').play();
}


btn35.onclick = function() {
  document.getElementById("reel").src = "https://www.blustudios.de/wp-content/uploads/Portfolio_Josh/bmw.mp4";
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



