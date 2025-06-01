// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelector(".md-tabs");
//   let lastScroll = 0;

//   if (!tabs) return;

//   window.addEventListener("scroll", function () {
//     const currentScroll = window.pageYOffset;

//     if (currentScroll <= 0) {
//       // At the top
//       tabs.style.display = "block";
//     } else if (currentScroll < lastScroll) {
//       // Scrolling up
//       tabs.style.display = "block";
//     } else {
//       // Scrolling down
//       tabs.style.display = "none";
//     }

//     lastScroll = currentScroll;
//   });
// });