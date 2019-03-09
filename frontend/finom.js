window.onload = check()

function check() {
  var all = document.getElementsByName("ALL");
  var stuff = document.getElementsByClassName("food");
  for (var i = 0; i < stuff.length; i++) {
    stuff = stuff[i].children[0]
    var stuff2 = document.getElementsByClassName("food")
    for (var j = 1; j < stuff2.length; j++) {
      if (stuff2[j] != stuff) {
        console.log("kabbe");
      }
    }
  }
}
