window.onload = pipa()

function pipa() {

  var mainCBox =  document.getElementsByClassName("minden")[0];
  var ingredients = document.getElementsByName("ingredients");
  var ingredients2 = document.getElementsByName("ingredients2");
  var ingredients3 = document.getElementsByName("ingredients3");
  var ingredients4 = document.getElementsByName("ingredients4");
  var megjegyzes = document.getElementsByName("megjegyzes");
  var food = document.getElementsByTagName("H3");


  for (var y = 0; y < food.length; y++) {
    for (var z = 0; z < food.length; z++) {
      if (food[y].isEqualNode(food[z]) == true) {
        for (i = 0; i < ingredients.length; i++) {
          for (x = 0; x < megjegyzes.length; x++) {
            ingredients[i].addEventListener("click", most)
            ingredients2[i].addEventListener("click", most)
            ingredients3[i].addEventListener("click", most)
            ingredients4[i].addEventListener("click", most)
            megjegyzes[x].addEventListener("keyup", most2)

            function most2() {
              megjegyzes[1].value = megjegyzes[0].value
              megjegyzes[2].value = megjegyzes[0].value
              megjegyzes[3].value = megjegyzes[0].value
            }

            function most() {
              for (i = 0; i < ingredients.length; i++) {
                  for (x = 0; x < megjegyzes.length; x++) {
                    if (mainCBox.checked == true) {
                      if (ingredients[i].checked == true) {
                        ingredients2[i].checked = true
                        ingredients3[i].checked = true
                        ingredients4[i].checked = true
                      }
                      else if (ingredients[i].checked == false) {
                          ingredients2[i].checked = false
                          ingredients3[i].checked = false
                          ingredients4[i].checked = false
                      }
                    }
                  }
              }
            }
          }
        }
      }
    }
  }
}
