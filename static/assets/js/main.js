/*
 * Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
 * Author: LMPixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.5.0
 */

(function ($) {
  "use strict";
  // Hide Mobile menu
  function mobileMenuHide() {
    var windowWidth = $(window).width(),
      siteHeader = $("#site_header");

    if (windowWidth < 1025) {
      siteHeader.addClass("mobile-menu-hide");
      $(".menu-toggle").removeClass("open");
      setTimeout(function () {
        siteHeader.addClass("animate");
      }, 500);
    } else {
      siteHeader.removeClass("animate");
    }
  }
  // /Hide Mobile menu

  // Custom scroll
  function customScroll() {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      $(".animated-section, .single-page-content").each(function () {
        $(this).perfectScrollbar();
      });
    } else {
      $(".animated-section, .single-page-content").each(function () {
        $(this).perfectScrollbar("destroy");
      });
    }
  }
  // /Custom scroll

  //On Window load & Resize
  $(window)
    .on("load", function () {
      //Load
      // Animation on Page Loading
      $(".preloader").fadeOut(800, "linear");

      // initializing page transition.
      var ptPage = $(".animated-sections");
      if (ptPage[0]) {
        PageTransitions.init({
          menu: "ul.main-menu",
        });
      }
    })
    .on("resize", function () {
      //Resize
      mobileMenuHide();
      $(".animated-section").each(function () {
        $(this).perfectScrollbar("update");
      });
      customScroll();
    });

  // On Document Load
  $(document).ready(function () {
    var movementStrength = 23;
    var height = movementStrength / $(document).height();
    var width = movementStrength / $(document).width();
    $("body").on("mousemove", function (e) {
      var pageX = e.pageX - $(document).width() / 2,
        pageY = e.pageY - $(document).height() / 2,
        newvalueX = width * pageX * -1,
        newvalueY = height * pageY * -1,
        elements = $(".lm-animated-bg");

      elements.addClass("transition");
      elements.css({
        "background-position":
          "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
      });

      setTimeout(function () {
        elements.removeClass("transition");
      }, 300);
    });

    // Mobile menu
    $(".menu-toggle").on("click", function () {
      $("#site_header").addClass("animate");
      $("#site_header").toggleClass("mobile-menu-hide");
      $(".menu-toggle").toggleClass("open");
    });

    // Mobile menu hide on main menu item click
    $(".main-menu").on("click", "a", function (e) {
      mobileMenuHide();
    });

    // Sidebar toggle
    $(".sidebar-toggle").on("click", function () {
      $("#blog-sidebar").toggleClass("open");
    });

    customScroll();
  });
})(jQuery);
