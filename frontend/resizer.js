var box = document.getElementById("edited-content")
function clickEvent() {
  box.style.position = "fixed"
  box.style.height = "88%"
  box.style.zIndex = "1"
  box.style.top = "1em"
  box.style.backgroundColor = "rgb(255, 153, 0)"
  box.style.color = "black"
  box.style.width = "100%"
  box.style.left = "10vw"
  box.style.fontFamily = "serif"
  box.style.transitionTimingFunction = "linear"
  box.style.cursor = "pointer"
}
window.onclick = function(event) {
  if (event.target == box) {
    box.style.position = ""
    box.style.height = ""
    box.style.zIndex = ""
    box.style.top = ""
    box.style.backgroundColor = ""
    box.style.color = ""
    box.style.width = ""
    box.style.left = ""
    box.style.fontFamily = ""
    box.style.transitionTimingFunction = "linear"
    box.style.cursor = ""
  }
}
