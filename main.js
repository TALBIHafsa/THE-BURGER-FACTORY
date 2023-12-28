// navbar changing color when scrolling
let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0);
});

//refresh 
function refreshPage() {
  location.reload();
}


//Add event listeners to the icons
var icons = document.getElementsByClassName('icon');
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    var type = this.getAttribute('data-type');
    var choices = document.getElementsByClassName('choices');
    for (var j = 0; j < choices.length; j++) {
      if (choices[j].id === type + '-choices') {
        choices[j].style.display = 'grid';  // Show the table corresponding to the clicked icon
      } else {
        choices[j].style.display = 'none';  // Hide the other tables
      }
    }
  });
}

// turn + to - when it's clicked
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




// Element arrays
const beefElements = [document.getElementById('beef'), document.getElementById('beef2'), document.getElementById('beef3')];
const lambElements = [document.getElementById('lamb'), document.getElementById('lamb2'), document.getElementById('lamb3')];
const chickenElements = [document.getElementById('chicken'), document.getElementById('chicken2'), document.getElementById('chicken3')];
const turkeyElements = [document.getElementById('turkey'), document.getElementById('turkey2'), document.getElementById('turkey3')];

// Layer count elements
const layerCounts = {
  beef: document.getElementById('layerCountbeef'),
  lamb: document.getElementById('layerCountlamb'),
  chicken: document.getElementById('layerCountchicken'),
  turkey: document.getElementById('layerCountturkey'),
};

// Layer counts
const layerCountsMap = {
  beef: 0,
  lamb: 0,
  chicken: 0,
  turkey: 0,
};

// Function to update layer counts
function updateLayerCount(elementName) {
  layerCounts[elementName].textContent = layerCountsMap[elementName];
}

// Function to update buttons
function updateButtons(elementName) {
  const addBtn = document.getElementById(`${elementName}add`);
  const removeBtn = document.getElementById(`${elementName}remove`);

  addBtn.disabled = layerCountsMap[elementName] === 3;
  removeBtn.disabled = layerCountsMap[elementName] === 0;
}


// Function to handle adding layers and reset other types
function addLayer(elementArray, elementName) {
  // Reset other types
  Object.keys(layerCountsMap).forEach(key => {
    if (key !== elementName && layerCountsMap[key] > 0) {
      const otherElements = eval(`${key}Elements`); // Accessing other element arrays dynamically
      otherElements.forEach(elem => {
        elem.style.display = 'none'; // Hide other type elements
      });
      layerCountsMap[key] = 0; // Reset count to zero
      updateLayerCount(key); // Update displayed count
      updateButtons(key); // Update buttons
    }
  });

  // Add layers for the selected type
  const currentLayer = layerCountsMap[elementName];
  elementArray[currentLayer].style.display = 'block';
  layerCountsMap[elementName]++;
  updateLayerCount(elementName);
  updateButtons(elementName);
}




// Function to handle removing layers
function removeLayer(elementArray, elementName) {
  const currentLayer = layerCountsMap[elementName] - 1;
  elementArray[currentLayer].style.display = 'none';
  layerCountsMap[elementName]--;
  updateLayerCount(elementName);
  updateButtons(elementName);
}

// Event listeners for adding and removing layers
function addRemoveListeners(addBtn, removeBtn, elementArray, elementName) {
  addBtn.addEventListener('click', () => addLayer(elementArray, elementName));
  removeBtn.addEventListener('click', () => removeLayer(elementArray, elementName));
}

// Adding listeners for each element
addRemoveListeners(beefadd, beefremove, beefElements, 'beef');
addRemoveListeners(lambadd, lambremove, lambElements, 'lamb');
addRemoveListeners(chickenadd, chickenremove, chickenElements, 'chicken');
addRemoveListeners(turkeyadd, turkeyremove, turkeyElements, 'turkey');


// Function to toggle the display of an element based on its ID
function toggleElementDisplay(elementId) {
  var element = document.getElementById(elementId);
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Event listeners for adding different burger sauce
const sauce = [
  'ketchup', 'mayonnaise', 'mustard', 'hotsauce'
];

sauce.forEach(sauce => {
  document.getElementById(`${sauce}add`).addEventListener('click', function() {
    toggleElementDisplay(sauce);
  });
});



const aftermeat = ['onion', 'tomato', 'lettuce', 'pickles', 'cheddar', 'mozzarella', 'swisscheese', 'americancheese'];

aftermeat.forEach(item => {
  document.getElementById(`${item}add`).addEventListener('click', function() {
    const meatLayerCount1 = Object.values(layerCountsMap).filter(count => count === 1).length;
    const meatLayerCount2 = Object.values(layerCountsMap).filter(count => count === 2).length;
    const meatLayerCount3 = Object.values(layerCountsMap).filter(count => count === 3).length;

    if (meatLayerCount1 === 1) {
      toggleElementDisplay(item);
    } else if (meatLayerCount2 === 1) {
      toggleElementDisplay(`${item}2`);
    } else if (meatLayerCount3 === 1) {
      toggleElementDisplay(`${item}3`);
    }
  });
});



// next and finish buttons
document.getElementById('finishbutton').addEventListener('click', function() {
  var burgertop = document.getElementById('burgertop');
  var sesame = document.getElementById('sesame');
  var burgertop2 = document.getElementById('burgertop2');
  var sesame2 = document.getElementById('sesame2');
  var burgertop3 = document.getElementById('burgertop3');
  var sesame3 = document.getElementById('sesame3');


  const meatLayerCount = Object.values(layerCountsMap).filter(count => count === 1).length;

  if (meatLayerCount === 1) {
    burgertop.style.display = 'block';
    sesame.style.display = 'block';
  }

  const meatLayerCount2 = Object.values(layerCountsMap).filter(count => count === 2).length;

  if (meatLayerCount2 === 1) {
    burgertop2.style.display = 'block';
    sesame2.style.display = 'block';
  }

  const meatLayerCount3 = Object.values(layerCountsMap).filter(count => count === 3).length;

  if (meatLayerCount3 === 1) {
    burgertop3.style.display = 'block';
    sesame3.style.display = 'block';
  }



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
})


// download button
document.getElementById('downloadButton').addEventListener('click', function() {
  const burgerContent = document.querySelector('.kitchen');
  html2canvas(burgerContent).then(function(canvas) {
    // Convert the burger content to a canvas
    document.body.appendChild(canvas); // Append the canvas to the DOM (for testing purposes)
    // Trigger the download of the canvas content as an image file
    var link = document.createElement('a');
    link.download = 'The_Burger_Factory.png';
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
    document.body.removeChild(canvas); // Remove the canvas from the DOM
  });
});



