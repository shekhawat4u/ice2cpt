(function ($) {

  "use strict";

  // Preloader
  var initPreloader = function () {
    $(document).ready(function ($) {
      var Body = $('body');
      Body.addClass('preloader-site');
    });
    $(window).load(function () {
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // Background color when scroll
  var initScrollNav = function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.navbar.fixed-top').addClass("bg-white");
    } else {
      $('.navbar.fixed-top').removeClass("bg-white");
    }
  }

  $(window).scroll(function () {
    initScrollNav();
  });

  // Chocolat lightbox
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    });
  }

  // Product quantity
  var initProductQty = function () {
    $('.product-qty').each(function () {
      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });
    });
  }

  // Countdown timer
  var initCountdown = function () {
    function updateCountdown() {
      const targetDate = new Date("July 31, 2025 23:59:59").getTime(); // Last date of submission
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        document.getElementById("countdown-timer").textContent = "The date has passed!";
        return;
      }

      // Calculate days, hours, and minutes
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      // Display the countdown in the desired format
      document.getElementById("countdown-timer").textContent = `Days: ${days} Hours: ${hours} Minutes: ${minutes}`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initialize the countdown immediately
    updateCountdown();
  }

  // Document ready
  $(document).ready(function () {

    // Testimonial swiper
    var testimonial_swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Product single page swiper
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      loop: true,
      slidesPerView: 3,
      autoplay: true,
      direction: "vertical",
      spaceBetween: 10,
    });

    var large_slider = new Swiper(".product-large-slider", {
      loop: true,
      slidesPerView: 1,
      autoplay: true,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

    // YouTube lightbox
    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585
    });

    // Isotope initialization
    window.addEventListener("load", (event) => {
      $('.isotope-container').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
      });

      var $grid = $('.entry-container').isotope({
        itemSelector: '.entry-item',
        layoutMode: 'masonry'
      });

      var $container = $('.isotope-container').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
      });

      // Filter button active state
      $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          $container.isotope({ filter: '*' });
        } else {
          $container.isotope({ filter: filterValue });
        }
      });
    });

    // Initialize functions
    initPreloader();
    initChocolat();
    initProductQty();
    initCountdown(); // Initialize the countdown

  }); // End of document ready

})(jQuery);
