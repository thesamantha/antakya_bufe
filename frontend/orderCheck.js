try {
  function order() {
    var takenOrder = document.getElementById("1");
    var orderNum = document.getElementById("takenum").value;
    var checkPlace = document.getElementsByClassName("jelzes");

    checkPlace.push(takenOrder)
  }
}
catch(err) {
  document.getElementById("try").innerHTML = err.message
}
