var slideIndex = 1;
showSlides(slideIndex);

var slideInterval = 0

function makeTimer() {
  clearInterval(slideInterval) // Очищаем интервал
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 5000);
}
// Вызываем функцию при загрузке страницы
makeTimer();


// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
  makeTimer();
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
  makeTimer();
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
