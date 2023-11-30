// navbar changing color when scrolling
let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0);
});


// // Add an event listener to the sauce icons
// document.getElementById('sauce-icon').addEventListener('click', function() {
//     var table = document.getElementById('sauce-choices');
//     if (table.style.display === 'none') {
//       table.style.display = 'block';  // Show the table when the icon is clicked
//     } else {
//       table.style.display = 'none';  // Hide the table if it's already visible
//     }
//   });
// Add an event listener to the meat icons
//   document.getElementById('meat-icon').addEventListener('click', function() {
//     var table = document.getElementById('meat-choices');
//     if (table.style.display === 'none') {
//       table.style.display = 'block';  // Show the table when the icon is clicked
//     } else {
//       table.style.display = 'none';  // Hide the table if it's already visible
//     }
//   });
// Add an event listener to the toppings icons
//   document.getElementById('toppings-icon').addEventListener('click', function() {
//     var table = document.getElementById('toppings-choices');
//     if (table.style.display === 'none') {
//       table.style.display = 'block';  // Show the table when the icon is clicked
//     } else {
//       table.style.display = 'none';  // Hide the table if it's already visible
//     }
//   });

//   document.getElementById('cheese-icon').addEventListener('click', function() {
//     var table = document.getElementById('cheese-choices');
//     if (table.style.display === 'none') {
//       table.style.display = 'block';  // Show the table when the icon is clicked
//     } else {
//       table.style.display = 'none';  // Hide the table if it's already visible
//     }
//   });






//Add event listeners to the icons
var icons = document.getElementsByClassName('icon');
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    var type = this.getAttribute('data-type');
    var tables = document.getElementsByClassName('choices');
    for (var j = 0; j < tables.length; j++) {
      if (tables[j].id === type + '-choices') {
        tables[j].style.display = 'block';  // Show the table corresponding to the clicked icon
      } else {
        tables[j].style.display = 'none';  // Hide the other tables
      }
    }
  });
}
  