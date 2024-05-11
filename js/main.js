$(document).ready(function () {
  /*Sidebar Menu*/
  "use strict";

  $(".preloader-wrap").delay(1500).fadeOut("slow");

  /*Swiper*/
  var mySwiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
    },
  });

  /* TypeWritter */
  var headerTitle = document.getElementById("header-title");

  var typewriter = new Typewriter(headerTitle, {
    loop: true,
  });

  typewriter
    .typeString("Hi, I'm <strong>Oscar Romero</strong>")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a <strong>Software Engineer</strong>")
    .pauseFor(2500)
    .deleteChars(7)
    .start();

  /*Navigation*/
  $(function () {
    $('a[href*="#"]:not([href="#"])').on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });

    $(window).scroll(function () {
      var nav = $(".navbar");
      var top = 200;
      if ($(window).scrollTop() >= top) {
        nav.addClass("inbody");
      } else {
        nav.removeClass("inbody");
      }
    });
  });
});
