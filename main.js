// navbar changing color when scrolling
let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0);
});



//Add event listeners to the icons
var icons = document.getElementsByClassName('icon');
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    var type = this.getAttribute('data-type');
    var choices = document.getElementsByClassName('choices');
    for (var j = 0; j < choices.length; j++) {
      if (choices[j].id === type + '-choices') {
        choices[j].style.display = 'flex';  // Show the table corresponding to the clicked icon
      } else {
        choices[j].style.display = 'none';  // Hide the other tables
      }
    }
  });
}
  