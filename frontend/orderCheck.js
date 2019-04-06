var basket = document.getElementsByClassName("ord-btn");    //
for (var i = 0, len = basket.length; i < len; i++) {        // Az összes ord-button kijelölése
  basket[i].addEventListener("click", order)                //
}

function order() {
  var takenOrder = this.parentNode.parentNode;                             // Kiválasztja azt a sort amelyikben a klikkelt gomb található
  var orderNum = takenOrder.children[4].children[0].value;                 // A beírt mennyiségü étel darabszáma
  var price = takenOrder.children[3].children[0].innerHTML;                // Az étel ára
  var checkPlace = document.getElementsByClassName("visszaJelzes")[0];     // Kosár tartalma
  var rendelt = document.getElementsByClassName("rendelt")[0];             // Rejtett tartalom
  var clone = takenOrder.cloneNode(true);                                  // Másolatot készít a kattintott gomb soráról

  var btnplc = document.createElement("TD")                                // Léterhoz egy TD elemet
  var megse = document.createElement("BUTTON");                            // Egy gombot hoz létre
  var btntxt = document.createTextNode("Mégse")                            // Szöveg létrehozása
  megse.appendChild(btntxt);                                               // Létrehozott szöveg hozzáadása a gombhoz

  megse.style.backgroundColor = "red";                                     //
  megse.style.border = "1px solid black";                                  //
  megse.style.borderRadius = "5px";                                        // Gomb stílusának szerkesztése
  megse.style.padding = "0.5em 1em";                                       //
  megse.style.cursor = "pointer"                                           //

  megse.addEventListener("click", function() {dplay.style.display = "none"}) // A gombra rákattintva elrejti a lemásolt sort, azaz kiveszi a kosárból

  rendelt.style.display = "block";                                        // Láthatóvá teszi a kosarat
  var dplay = checkPlace.appendChild(clone);                              // A másolat hozzáadása a látható tartalomhoz

  dplay.removeChild(dplay.lastElementChild);                              //
  dplay.removeChild(dplay.lastElementChild);                              // A nem kívánt oszlopok eltávolítása a másolatból
  dplay.children[2].style.display = "none";                               //

  dplay.lastElementChild.innerHTML = orderNum + " db = " + price * orderNum + " Ft"; //Kiszámítja a darabszámot és az árat
  var insert = dplay.appendChild(btnplc);                                             // Egy TD elem hozzáadása a másolt táblázathoz (a kosárban)
  insert.appendChild(megse);                                                           // Az előző sorban létrehozott TD elembe beleraka a gombot ami törli majd az egész sort

  for (var i = 0; i < 5; i++) {
    dplay.children[i].style.border = "1px solid black";
  }
  
  dplay.style.verticalAlign = "middle";
  dplay.style.margin = "auto";
  dplay.style.maxWidth = "500px";
  dplay.style.display = "block";
}
