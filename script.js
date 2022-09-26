const multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  const carousel = new bootstrap.Carousel(multipleCardCarousel,
    {
      interval: false
    })

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var itemsWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - (itemsWidth * 4))) {
      scrollPosition += itemsWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= itemsWidth;
      $(".carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}