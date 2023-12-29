function optionBar1(){
    var optionsBar = document.getElementById('Choices-container1');
    optionsBar.style.display = (optionsBar.style.display === 'none' || optionsBar.style.display === '') ? 'block' : 'none';
}
function optionBar2(){
    var optionsBar = document.getElementById('Choices-container2');
    optionsBar.style.display = (optionsBar.style.display === 'none' || optionsBar.style.display === '') ? 'block' : 'none';
}
function optionBar3(){
    var optionsBar = document.getElementById('Choices-container3');
    optionsBar.style.display = (optionsBar.style.display === 'none' || optionsBar.style.display === '') ? 'block' : 'none';
}
function optionBar4(){
    var optionsBar = document.getElementById('Choices-container4');
    optionsBar.style.display = (optionsBar.style.display === 'none' || optionsBar.style.display === '') ? 'block' : 'none';
}


var z = 0;
var t = 0;

const addIngredient = (ingredient) =>{
    
    z = z + 10;
    
    var ingredientElement = document.createElement("div");
    
    ingredientElement.className = ingredient + " sub_ingredient";
    ingredientElement.id = ingredient;

    switch (true){
        case ingredientElement.classList.contains("tomato"):
            t = t + 17;
            break;
        case ingredientElement.classList.contains("laam"):
            t = t + 17;
            break;
        case ingredientElement.classList.contains("beef"):
            t = t + 17;
            break;
        case ingredientElement.classList.contains("veganMeat"):
            t = t + 17;
            break;
        case ingredientElement.classList.contains("meata"):
            t = t + 17;
            break;  
        case ingredientElement.classList.contains("roquefort"):
            t = t + 11;
            break;  
        case ingredientElement.classList.contains("mozarella"):
            t = t + 11;
            break; 
        case ingredientElement.classList.contains("american"):
            t = t + 11;
            break;  
        case ingredientElement.classList.contains("edam"):
            t = t + 11;
            break;  
        case ingredientElement.classList.contains("lettuce"):
            t = t + 9;
            break;   
        case ingredientElement.classList.contains("mayonnaise"):
            t = t + 19;
            break;
        case ingredientElement.classList.contains("Ketchup"):
            t = t + 10;
            break;
        case ingredientElement.classList.contains("soy"):
            t = t + 10;
            break;
        case ingredientElement.classList.contains("chili-sauce"):
            t = t + 10;
            break;
        case ingredientElement.classList.contains("onion"):
            t = t+ 7;
            break;
        case ingredientElement.classList.contains("pickle"):
            t = t + 5;
            break;
        case ingredientElement.classList.contains("topbread"):
            t = t + 17;
            break;
        
    }

    ingredientElement.style.top = "-" + t + "px";
    
    
    ingredientElement.style.zIndex = z;
    

    var Burger = document.getElementById("Burger");

    Burger.insertBefore(ingredientElement,Burger.firstChild);
}


function topbreadadd(){
    var topbread = document.getElementById('topbread');
    if (topbread.style.display === 'none' || topbread.style.display === '') {
        topbread.style.display = 'block';
    }
}
function reloadPage() {
    location.reload();
}





