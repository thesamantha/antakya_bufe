
document.getElementById("ALL").addEventListener('change', (event) => {
  if (document,getElementById("ALL").checked == true) {
    responsiveChecks()
  }
})

function responsiveChecks() {
  var checkboxes = document.getElementsByClassName('ingredients');

  for(var i = 0; i < checkboxes.length; i++)
    checkboxes[i].addEventListener('change', (event) => {
      if (event.target.checked) {
        check(checkboxes, event.target.parentNode.parentNode.parentNode.children[0].innerHTML, event.target.value, true);
      } else {
        check(checkboxes, event.target.parentNode.parentNode.parentNode.children[0].innerHTML, event.target.value, false);
      }
  })
}
function check(checkboxes, food, value, check) {
  for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].parentNode.parentNode.parentNode.children[0].innerHTML == food) {
      if(checkboxes[i].value == value) {
        checkboxes[i].checked = check;
      }
    }
  }
}
