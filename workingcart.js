var arrayOfPrices = [];
var arrayOfTitles = [];
// get the price with this object
// return error in case nothing is pressed 
var errorElement = document.getElementById('error');
// return the final list of prices, so total price
var totalPriceElement = document.getElementById('totalprice');
// inserting for the element of the shopping cart
var totalCartElement = document.getElementById('totalcart')
// checkout element
var checkout = document.getElementById('checkout')
// getting the price using a form
// let price = event.target.form.price.value;
// for checkout
function openForm() {
  document.getElementById("myForm").style.display = "block";
  // TODO: find a way to show the final or total price
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function myCheckout() {
  var popup = document.getElementById("checkoutform");
  popup.classList.toggle("show");

}

// let myForm = document.getElementById("myForm");
// let checkoutButton = document.getElementById('checkoutButton')
// checkoutButton.addEventListener("click", (event)=>{
//   myForm
//   myForm.classList.toggle("show");

// });

// so prices are dependent on titles if titles exist then prices are set if not

function addToCart() {
    event.preventDefault();
    console.log(event.target.form);
    let price = event.target.form.price.value;
    let title = event.target.form.title.value;
    // debugger;
    errorElement.innerHTML = "";    
    // let prices = price.slice(1,6);
    let parse_price = parseFloat(price);
    if (price === ""){
      errorElement.innerHTML = "No prices selected";
    }
    else {
      arrayOfTitles.push(title);
      arrayOfPrices.push(parse_price);
      checkout.innerHTML = arrayOfTitles;
      console.log(arrayOfPrices);
      console.log(arrayOfTitles);
      if (arrayOfTitles.length == 0) {
        totalcart.innerHTML = "Cart Empty";
    }
      else {
      
        let sum=arrayOfPrices.reduce(function(a, b){return a+b;});
        totalcart.innerHTML = arrayOfTitles + "<br> Total Price: "+ "$"+sum;
    }
  }
    price.value = ""; 
  }

// function showTotalPrices(){
//     // for the error message if you click total price and there is no input 
//     // console.log(arrayOfPrices)
//     if (arrayOfTitles.length == 0 ) 
//       errorElement.innerHTML = "No prices to show";
//     else
//     // I think the undefined is stemming from sum but how to I avoid this
//         var sum=arrayOfPrices.reduce(function(a, b){return a+b;})
//         totalprice.innerHTML = "$"+sum
//         // how to fix the undefined problem maybe try and catch. if undefined print nothing 
//         // or just if/else statement 
//     // in case I want to add the name of meals 
//     // totalprice.innerHTML = arrayOfPrices.join(' ');
// }
// var product=[];

// function showCart(){
//   // arrayOfPrices.length == 1 
//   if (arrayOfTitles.length == 0) 
//       errorElement.innerHTML = "Nothing selected yet";
//   else 

//     totalcart.innerHTML = arrayOfTitles

// }
function clearNode(){
  totalcart.innerHTML = "";
  totalprice.innerHTML = "";
  checkout.innerHTML = "";
  arrayOfTitles.splice(0, arrayOfTitles.length);
  arrayOfPrices.splice(0, arrayOfPrices.length);

  console.log(arrayOfTitles)

}
// this clears the window from the cart BUT I also want to remove empty the nodes in the function
// HTMLElement.prototype.hide = function() {
// 	this.innerHTML = '';

// }
// var hide = document.getElementById('hide'),
//   cart = document.getElementById('totalcart');

// hide.onclick = function() {
//   cart.hide();
// }
// let myForm = document.getElementById("myForm")
// let checkoutButton = document.getElementById('checkoutButton')
// checkoutButton.addEventListener("click", (event)=>{
//   myForm.classList.toggle("show");

// });
// let checkoutForm = document.getElementById('checkout-form-form');
//   checkoutForm.addEventListener("submit",function(event){
//     console.log("how to add event")
//     event.preventDefault();
    
//     })

let cartButton = document.getElementById('showCartButton');
cartButton.addEventListener("click", (event)=>{
  totalcart.classList.toggle("hidden");

});


