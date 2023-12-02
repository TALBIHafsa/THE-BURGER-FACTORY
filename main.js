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








document.querySelectorAll('.plus-button').forEach(button => {
  button.addEventListener('click', function() {
    if (this.textContent === '+') {
      this.textContent = '-';
      this.classList.add(brown-text);
    } else {
      this.textContent = '+';
      this.classList.remove(brown-text);
    }
  });
});





// add ketchup to the burger
document.getElementById('ketchupadd').addEventListener('click', function() {
  var ketchup = document.getElementById('ketchup');
  if (ketchup.style.display === 'none') {
    ketchup.style.display = 'block';   
  } else {
    ketchup.style.display = 'none';   
  }
});

// add mayonnaise to the burger
document.getElementById('mayonnaiseadd').addEventListener('click', function() {
  var mayonnaise = document.getElementById('mayonnaise');
  if (mayonnaise.style.display === 'none') {
    mayonnaise.style.display = 'block';   
  } else {
    mayonnaise.style.display = 'none';   
  }
});

// add mustard to the burger
document.getElementById('mustardadd').addEventListener('click', function() {
  var mustard = document.getElementById('mustard');
  if (mustard.style.display === 'none') {
    mustard.style.display = 'block';   
  } else {
    mustard.style.display = 'none';   
  }
});

// add hot-sauce to the burger
document.getElementById('hotsauceadd').addEventListener('click', function() {
  var hot = document.getElementById('hot-sauce');
  if (hot.style.display === 'none') {
    hot.style.display = 'block';   
  } else {
    hot.style.display = 'none';   
  }
});

// add turkey to the burger
document.getElementById('turkeyadd').addEventListener('click', function() {
  var turkey = document.getElementById('turkey');
  if (turkey.style.display === 'none') {
    turkey.style.display = 'block';   
  } else {
    turkey.style.display = 'none';   
  }
});

// add beef to the burger
document.getElementById('beefadd').addEventListener('click', function() {
  var beef = document.getElementById('beef');
  if (beef.style.display === 'none') {
    beef.style.display = 'block';   
  } else {
    beef.style.display = 'none';   
  }
});

// add lamp to the burger
document.getElementById('lampadd').addEventListener('click', function() {
  var lamp = document.getElementById('lamp');
  if (lamp.style.display === 'none') {
    lamp.style.display = 'block';   
  } else {
    lamp.style.display = 'none';   
  }
});

// add chicken to the burger
document.getElementById('chickenadd').addEventListener('click', function() {
  var chicken = document.getElementById('chicken');
  if (chicken.style.display === 'none') {
    chicken.style.display = 'block';   
  } else {
    chicken.style.display = 'none';   
  }
});

// add onion to the burger
document.getElementById('onionadd').addEventListener('click', function() {
  var onion = document.getElementById('onion');
  if (onion.style.display === 'none') {
    onion.style.display = 'block';   
  } else {
    onion.style.display = 'none';   
  }
});

// add tomato to the burger
document.getElementById('tomatoadd').addEventListener('click', function() {
  var tomato = document.getElementById('tomato');
  if (tomato.style.display === 'none') {
    tomato.style.display = 'block';   
  } else {
    tomato.style.display = 'none';   
  }
});

// add lettuce to the burger
document.getElementById('lettuceadd').addEventListener('click', function() {
  var lettuce = document.getElementById('lettuce');
  if (lettuce.style.display === 'none') {
    lettuce.style.display = 'block';   
  } else {
    lettuce.style.display = 'none';   
  }
});

// add pickles to the burger
document.getElementById('picklesadd').addEventListener('click', function() {
  var pickles = document.getElementById('pickles');
  if (pickles.style.display === 'none') {
    pickles.style.display = 'block';   
  } else {
    pickles.style.display = 'none';   
  }
});

// add cheddar to the burger
document.getElementById('cheddaradd').addEventListener('click', function() {
  var cheddar = document.getElementById('cheddar');
  if (cheddar.style.display === 'none') {
    cheddar.style.display = 'block';   
  } else {
    cheddar.style.display = 'none';   
  }
});

// add mozzarella to the burger
document.getElementById('mozzarellaadd').addEventListener('click', function() {
  var mozzarella = document.getElementById('mozzarella');
  if (mozzarella.style.display === 'none') {
    mozzarella.style.display = 'block';   
  } else {
    mozzarella.style.display = 'none';   
  }
});


// add swisscheese to the burger
document.getElementById('swisscheeseadd').addEventListener('click', function() {
  var swisscheese = document.getElementById('swisscheese');
  if (swisscheese.style.display === 'none') {
    swisscheese.style.display = 'block';   
  } else {
    swisscheese.style.display = 'none';   
  }
});

// add americancheese to the burger
document.getElementById('americancheeseadd').addEventListener('click', function() {
  var americancheese = document.getElementById('americancheese');
  if (americancheese.style.display === 'none') {
    americancheese.style.display = 'block';   
  } else {
    americancheese.style.display = 'none';   
  }
});





  // add burgertop to the burger
document.getElementById('finishbutton').addEventListener('click', function() {
  var burgertop = document.getElementById('burgertop');
  burgertop.style.display = 'block';  
  var sesame = document.getElementById('sesame');
  sesame.style.display = 'block';  
  var choicesbar = document.getElementById('choicesbar');
  choicesbar.style.display = 'none'; 
  var choicescontainer = document.getElementById('choices-container');
  choicescontainer.style.display = 'none'; 
  var finishbutton = document.getElementById('finishbutton');
  finishbutton.style.display = 'none'; 
  var congrat = document.getElementById('congrat');
  congrat.style.display = 'block'; 
  var shine = document.getElementById('shine');
  shine.style.display = 'block';
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.style.display = 'block';
  var anothertryButton = document.getElementById('anothertryButton');
  anothertryButton.style.display = 'block';
})

document.getElementById('next1').addEventListener('click', function() {
  var meat = document.getElementById('meat-choices');
  meat.style.display = 'flex'; 
  var sauce = document.getElementById('sauce-choices');
  sauce.style.display = 'none';
  var next = document.getElementById('next1');
  next.style.display = 'none';
  var next = document.getElementById('next2');
  next.style.display = '';
})
document.getElementById('next2').addEventListener('click', function() {
  var meat = document.getElementById('meat-choices');
  meat.style.display = 'none'; 
  var sauce = document.getElementById('toppings-choices');
  sauce.style.display = 'flex';
  var next = document.getElementById('next2');
  next.style.display = 'none';
  var next = document.getElementById('next3');
  next.style.display = '';
})
document.getElementById('next3').addEventListener('click', function() {
  var meat = document.getElementById('toppings-choices');
  meat.style.display = 'none'; 
  var sauce = document.getElementById('cheese-choices');
  sauce.style.display = 'flex';
  var next = document.getElementById('next3');
  next.style.display = 'none';
  var next = document.getElementById('finishbutton');
  next.style.display = '';
})




document.getElementById('downloadButton').addEventListener('click', function() {
  const burgerContent = document.querySelector('.kitchen');
  html2canvas(burgerContent).then(function(canvas) {
    // Convert the burger content to a canvas
    document.body.appendChild(canvas); // Append the canvas to the DOM (for testing purposes)
    // Trigger the download of the canvas content as an image file
    var link = document.createElement('a');
    link.download = 'custom_burger.png';
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
    document.body.removeChild(canvas); // Remove the canvas from the DOM
  });
});



