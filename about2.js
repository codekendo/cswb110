// window.onload = function() {
//
//   var els = document.getElementsByClassName("placeholder");
//   Array.prototype.forEach.call(els, function(el) {
//
//
//
//     var small = el.querySelector('.img-small');
//
//     // 1: load small image and show it
//     var img = new Image();
//     img.src = small.src;
//     img.onload = function() {
//       small.classList.add('loaded');
//     };
//     // 2: load large image
//     var imgLarge = new Image();
//     //gets the attribute data-large the dataset.large is equal to data-large
//
//     imgLarge.src = el.dataset.large;
//
//
//     imgLarge.onload = function() {
//       imgLarge.classList.add('loaded');
//     };
//     el.appendChild(imgLarge);
//
//   }) //End of ForEach
// }
