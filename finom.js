// if particular checkbox with name is checked, check all others with that name
document.getElementById("ALL").addEventListener('change', (event) => {
  responsiveChecks();
})

function responsiveChecks() {
  var checkboxes = document.getElementsByClassName('myCheckbox')

  for(var i = 0; i < checkboxes.length; i++)
    checkboxes[i].addEventListener('change', (event) => {
      if (event.target.checked) {
        check(event.target.value, true);
      } else {
        check(event.target.value, false);
      }
  })

  function check(value, check) {
    for(var i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].value == value) {
        checkboxes[i].checked = check;
      }
    }
  }
}
