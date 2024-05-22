var swiper = new Swiper(".testimonial-slide-inner-sec", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// accordion
const ourItemDiv = document.getElementsByClassName("acc-box");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// Initially hide all close icons
for (let i = 0; i < closeIcon.length; i++) {
  closeIcon[i].style.display = "none";
}

for (let i = 0; i < ourItemDiv.length; i++) {
  ourItemDiv[i].addEventListener("click", () => {
    // First, close all items
    for (let j = 0; j < ourItemDiv.length; j++) {
      if (j !== i) {
        // Don't toggle the clicked item
        ourItemDiv[j].classList.remove("active");
        closeIcon[j].style.display = "none";
        openIcon[j].style.display = "block";
      }
    }

    // Then, toggle the clicked item
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}
