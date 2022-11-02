let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// categories-------------------------------------------------------

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// cart button
let carts = document.querySelectorAll('.btn-cart');
let products = [{
    name: 'ARGAN',
    tag: 'Argan Oil Treatment ',
    price: '620 L.E',
    incart:'0'
    
},
{
    name: 'BRUN',
    tag: 'Dryer 1200 watt',
    price: '1200 L.E',
    incart:'0'
    
},
{
    name: 'MONJO',
    tag: 'Set Of Brushes',
    price: '250 L.E',
    incart:'0'
    
 },{
    name: 'BIOLABS',
    tag: 'HAIR Shampoo',
    price: '450 L.E',
    incart:'0'
    
 }]
 for (let i = 0; i < carts.length; i++){
     carts[i].addEventListener('click', () => {
       cartNumbers(products[i]);
       totalCost(products[i])
     })
     
     }

function onLoadCartNumbers() {
    let produceNumbers = localStorage.getItem('cartNumbers');
  
    if (produceNumbers) {
        document.querySelector('.cart span').textContent = produceNumbers;
      }   
     }
 
function cartNumbers(product) {
    let produceNumbers = localStorage.getItem('cartNumbers');
  
    produceNumbers = parseInt(produceNumbers);

    if (produceNumbers) {
        localStorage.setItem('cartNumbers', produceNumbers + 1);
        document.querySelector('.cart span').textContent = produceNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
             
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
  }
  setItem(product);

}
function setItem(product) {
  let cartItem = localStorage.getItem('productsInCart');
  cartItem = JSON.parse(cartItem);
  
  if (cartItem != null) {
    if (cartItem[product.tag] == undefined) {
      cartItem = {
        ...cartItem,
        [product.tag]: product
      }
    }
    cartItem[product.tag].incart += 1;
  } else {
    product.incart = 1;
   cartItem = {
     [product.tag]: product
   }
  
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItem));
  }
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
    
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

onLoadCartNumbers();

  

// 

// -----------------form----------------
function fun() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x.length < 14  ) {
    text = "put valid number";
  } else {
    text = "valid";
  }
  document.getElementById("demo").innerHTML = text;
}