var box = document.getElementById("edited-content");
box.addEventListener("click", clickEvent, true)

function clickEvent() {
  var checkbox = document.getElementById("checkbox");
  if (checkbox.checked == true) {
    change()
  }
  else {

  }
}

function change() {
  box.style.backgroundColor = "orange"
  box.style.color = "black"
  box.style.transition = "6s"
  box.style.transform = "scale(1)"
  box.style.zIndex = "2"
  box.style.position = "relative"
  box.style.margin = " .1% auto"
  box.style.left = "0"
  box.style.right = "0"
  box.style.top = "0"
  box.style.bottom = "0"
  box.style.maxWidth = "98%"
}
