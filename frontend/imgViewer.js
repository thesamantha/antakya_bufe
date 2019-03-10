var modal = document.getElementById("imgModal");

document.body.addEventListener("keydown", function(event) {if (event.keyCode == 27) {modal.style.display = "none"}})

function myFunction(imgs) {
  var expandImg = document.getElementById("t-img");
  var imgTxt = document.getElementById("caption");
  modal.style.display = "block";
  expandImg.src = imgs.src;
  imgTxt.innerHTML = imgs.alt;
}

var X = document.getElementsByClassName("X")[0];
X.onclick = function() {
  modal.style.display = "none";
}
