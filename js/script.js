//Dark and light mode
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
document.addEventListener("DOMContentLoaded", function() {
  $('.preloader').show();
});
window.onload = function() {
  $('.preloader').hide();
};
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu").toggleClass("active");
  });
  $(".header-bar").on("click", function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    $(".menu").toggleClass("d-none");
  });
  $('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
  window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".edu-item");
    items.forEach((item, index) => {
      const position = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight * 0.75) {
        item.classList.add("show");
        if (index % 2 === 0) {
          item.classList.add("fadeInLeft");
          item.classList.remove("fadeInRight");
        } else {
          item.classList.add("fadeInRight");
          item.classList.remove("fadeInLeft");
        }
      } else {
        item.classList.remove("show");
        item.classList.remove("fadeInLeft");
        item.classList.remove("fadeInRight");
      }
    });
  });
});
