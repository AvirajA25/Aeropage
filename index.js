
var swiper = new Swiper(".mySwiper", {});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2.3,
  spaceBetween: 30,
  loop: true,

});

var icon = document.getElementById("dark-icon");
var logo = document.getElementById("dark-logo");
var offcanvas = document.getElementById("offcanvas-image");
var footer = document.getElementById("footer-dark");
icon.addEventListener("click", ()=> {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    logo.src ="images/logo-light.png";
    offcanvas.src = "images/logo-light.png"
    footer.src = "images/logo-light.png"
  } else {
    icon.src = "images/moon.png";
    logo.src ="images/logo-image.png";
    offcanvas.src = "images/logo-image.png";
    footer.src = "images/logo-image.png";
  }

 
  

});









var totop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=> {
  totop.classList.toggle("active", window.scrollY > 400);
});



// var totop = document.querySelector(".to-top");
// window.addEventListener("scroll",() => {
//   if (window.scrollY > 100 ) {
//     totop.classList.add("active");

//   }else {
//     totop.classList.remove("active");
//   }
// });


var navstick = document.querySelector(".navigation-bar");
window.addEventListener("scroll", () => {

  navstick.classList.toggle("sticky", window.scrollY > 100);
});
