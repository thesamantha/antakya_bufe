
var modalbx = document.getElementById("id01");

document.body.addEventListener("keydown", function(event) {if (event.keyCode == 27) {modalbx.style.display = "none"} })

window.onclick = function(event) {
  if (event.target == modal) {
    modalbx.style.display = "none";
  }
}
