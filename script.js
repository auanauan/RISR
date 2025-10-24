/* ========================================
   FUNCTION AUTO CLOSE NAVBAR
========================================= */

document.querySelectorAll(".nav-link3").forEach((item) => {
  item.addEventListener("click", () => {
    var navbarCollapse = document.getElementById("navbarToggleExternalContent");
    var bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  });
});

/* ========================================
   FUNCTION AUTO CLOSE NAVSIDEBAR
========================================= */

function closeNavbar() {
  var navbarCollapse = document.getElementById("navbarToggleExternalContent");
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });
  bsCollapse.hide();
  // Reset the image size when closing the navbar
  resetImageSize();
}

function resetImageSize() {
  var img = document.querySelector(".navTopImage");
  img.style.width = "60%";
}

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    var img = document.querySelector(".navTopImage");
    if (img.style.width === "60%") {
      img.style.width = "45%";
    } else {
      img.style.width = "60%";
    }
  });

document
  .querySelector(".navTopImage")
  .addEventListener("click", function (event) {
    closeNavbar();
  });

document.querySelectorAll(".nav-link3").forEach((item) => {
  item.addEventListener("click", function (event) {
    closeNavbar();
  });
});
document.querySelectorAll(".navbarToggleExternalContent").forEach((item) => {
  item.addEventListener("click", function (event) {
    closeNavbar();
  });
});

document
  .querySelector('[data-bs-target="#charts-nav"]')
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

/* ================
   Swiper initialization
=================== */

const swiperElement = document.querySelector(".swiper");
if (swiperElement) {
  // @ts-ignore
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
}
