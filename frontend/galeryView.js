function openModal() {
  document.getElementById('myModal').style.display = "block";
}
/*------------------------------------Gombnyomásra képcsere vagy kilépés-----------------------------------*/
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('myModal').style.display = "none";
    }
    else if (evt.keyCode == 37) {
      plusSlides(-1)
    }
    else if (evt.keyCode == 39) {
      plusSlides(1)
    }
};
/*------------------------------------Gombnyomásra képcsere vagy kilépés vége-----------------------------------*/
function closeModal() {
  document.getElementById('myModal').style.display = "none";
  }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
