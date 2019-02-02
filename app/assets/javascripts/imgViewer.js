var modal = document.getElementById("imgModal");
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
