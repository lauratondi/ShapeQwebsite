// $(document).ready(function () {
//   var scroll_pos = 0;
//   $('#section').scroll(function () {
//     scroll_pos = $(this).scrollTop();
//     if (scroll_pos > 100) {
//       $('#section').css('background-color', '#133644');
//     } else {
//       $('#section').css('background-color', 'white');
//     }
//     console.log(scroll_pos);
//   });
// });

// let sec = document.querySelector('section');
// let colors = ['white', '#133644'];

// window.addEventListener('scroll', function () {
//   if (
//     document.documentElement.scrollTop ||
//     window.pageYOffset > window.innerHeight
//   ) {
//     var diff = parseInt(window.pageYOffset - window.innerHeight);
//     var step = parseInt(window.innerHeight * 2);
//     sec.style.backgroundColor = colors[Math.floor(diff / step)];
//   }
// });

// let section = document.querySelector('section');

// window.addEventListener('scroll', function () {
//   if (document.documentElement.scrollTop > 50) {
//     section.addClass('changeColor');
//   } else {
//     section.removeClass('changeColor');
//   }
// });

// $(function() {
//   $(window).scroll(function () {
//      if ($(this).scrollTop() > 50) {
//         $(‘section’).addClass(‘changeColor’)
//      }
//      if ($(this).scrollTop() < 50) {
//         $(‘section’).removeClass(‘changeColor’)
//      }
//   });
// });
// val = window.innerHeight;
const section = document.querySelector('section');

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    section.classList.add('active');
  } else {
    section.classList.remove('active');
  }
};

// window.addEventListener('scroll', function () {
//   if (
//     document.documentElement.scrollTop ||
//     window.pageYOffset < window.innerHeight
//   ) {
//     section.classList.add('active');
//   } else {
//     section.classList.remove('active');
//   }
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > 50) {
//       $('section').css('background', 'green');
//     } else {
//       $('section').css('background', '');
//     }
//   });
// });

// var color = [, 'white', ' #133644'];

// document.querySelector('section').addEventListener('scroll', function () {
//   document.querySelector('section').style.background = color[* color.length];
// });
