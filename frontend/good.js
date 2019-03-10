var all = document.getElementsByName("ALL");                  // Főkapcsoló
var stuff = document.getElementsByClassName("food");          // A DIV amiben a kaja neve van és az összetevők listája
var checkbox = []  // Kijelölöm az inputokat a listák darabszámával
for (var i = 0; i < stuff.length; i++) {                      // Kijelölöm a DIV darabszámát jelen esetben 0-3
  var childs = stuff[i].children[1].children                  // A listák kijelzése...
  for (var x = 1; x <= childs.length; x++) {                  //...és megszámolása.
    checkbox.push(document.getElementsByName("alap" + x))
    console.log(checkbox);
  }
}
