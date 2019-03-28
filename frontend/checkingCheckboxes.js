var checkboxes = document.getElementsByClassName('ingredients');
var textarea = document.getElementsByName("megjegyzes");
window.onload = responsiveChecks()

document.getElementById("ALL").addEventListener('change', (event) => {
      responsiveChecks()
      megjegyzes()
})

function responsiveChecks() {
  /*---------------------------------CSS-------------------------------------------*/
  var background = document.getElementById("positionforall")
  if (document.getElementById("ALL").checked == true) {
    background.style.backgroundColor = "darkgreen"
  }
  else if (document.getElementById("ALL").checked == false) {
    background.style.backgroundColor = "inherit"
  }
  /*------------------------------End CSS-------------------------------------------*/
  for(var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('change', (event) => {
        if (document.getElementById("ALL").checked == true) {
          if (event.target.checked) {
            check(event.target.parentNode.parentNode.parentNode.children[0].innerHTML, event.target.value, true);
          }
          else {
            check(event.target.parentNode.parentNode.parentNode.children[0].innerHTML, event.target.value, false);
          }
        }
        else if (document.getElementById("ALL").checked == false) {
          this.removeEventListener('change', arguments.callee, false)
        }
      });
    }
}


function check(food, value, checked) {
  for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].parentNode.parentNode.parentNode.children[0].innerHTML == food) {
      if(checkboxes[i].value == value) {
        checkboxes[i].checked = checked;
      }
    }
  }
}


/*-------------------------------------------megjegxzés---------------------------------------------------------*/
function megjegyzes() {
  for (var i = 0; i < textarea.length; i++) {
      textarea[i].addEventListener("keyup", (event) => {
        if (document.getElementById("ALL").checked == true) {
          var text = event.target.value
          for (var i = 0; i < textarea.length; i++) {
            var foodname = textarea[i].parentNode.children[0].innerHTML
            if (event.target.parentNode.children[0].innerHTML == foodname) {
              textarea[i].value = text
          }
        }
      }
      else if (document.getElementById("ALL").checked == false) {
        this.removeEventListener('keyup', arguments.callee, false)
      }
    })
  }
}
