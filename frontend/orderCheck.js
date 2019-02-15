var basket = document.getElementsByClassName("ord-btn");
for (var i = 0, len = basket.length; i < len; i++) {
  basket[i].addEventListener("click", order)
}

function order() {
  var takenOrder = this.parentNode.parentNode;
  var orderNum = takenOrder.children[4].children[0].value;
  var price = takenOrder.children[3].children[0].innerHTML;
  var checkPlace = document.getElementsByClassName("visszaJelzes")[0];
  var rendelt = document.getElementsByClassName("rendelt")[0];
  var clone = takenOrder.cloneNode(true);



  rendelt.style.display = "block";
  var dplay = checkPlace.appendChild(clone);
  dplay.removeChild(dplay.lastElementChild);
  dplay.removeChild(dplay.lastElementChild);
  dplay.children[2].style.display = "none"
  dplay.lastElementChild.innerHTML = orderNum + " db = " + price * orderNum + " Ft";
}
