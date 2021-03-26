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
    if (price === "")
      errorElement.innerHTML = "No prices selected";
    else
      arrayOfTitles.push(title);
      arrayOfPrices.push(parse_price);
      checkout.innerHTML = arrayOfTitles;
      console.log(arrayOfPrices);
      console.log(arrayOfTitles);
    price.value = ""; 
  }

function showTotalPrices(){
    // for the error message if you click total price and there is no input 
    // console.log(arrayOfPrices)
    if (arrayOfTitles.length == 0 ) 
      errorElement.innerHTML = "No prices to show";
    else
    // I think the undefined is stemming from sum but how to I avoid this
        var sum=arrayOfPrices.reduce(function(a, b){return a+b;})
        totalprice.innerHTML = "$"+sum
        // how to fix the undefined problem maybe try and catch. if undefined print nothing 
        // or just if/else statement 
    // in case I want to add the name of meals 
    // totalprice.innerHTML = arrayOfPrices.join(' ');
}
// var product=[];

function showCart(){
  // arrayOfPrices.length == 1 
  if (arrayOfTitles.length == 0) 
      errorElement.innerHTML = "Nothing selected yet";
  else 
    totalcart.innerHTML = arrayOfTitles
  // arrayOfTitles.length will give you for example two shrimp meals
  // 
      // var iDiv = document.createElement('div');
      // debugger;
      // iDiv.id = arrayOfPrices.length;
      // iDiv.className = 'block';
      // document.getElementById('totalcart').appendChild(iDiv)
      // // document.getElementsByTagName('header')[0].appendChild(iDiv);
      // var para = document.createElement("span");
      // var node = document.createTextNode('Meal: ' + arrayOfTitles+' |                    ');
      // para.appendChild(node);
      // console.log(node)
      // console.log(para)

      // var element = document.getElementById(arrayOfPrices.length);
      // element.appendChild(para);
      // console.log(element)
      // para = document.createElement("span");
      // node = document.createTextNode('Price: '+ arrayOfPrices);
      // para.appendChild(node);
      // console.log(node)
      // console.log(para)
      // element.appendChild(para);
      // console.log(element)
      // clearNode(node, para)
    
}
function clearNode(){
  // var div = document.getElementById("totalcart");
  // var emptyPrices = document.getElementById("totalprice")
  totalcart.innerHTML = "";
  totalprice.innerHTML = "";
  checkout.innerHTML = "";
  arrayOfTitles.splice(0, arrayOfTitles.length);
  arrayOfPrices.splice(0, arrayOfPrices.length);

  console.log(arrayOfTitles)

}
// this clears the window from the cart BUT I also want to remove empty the nodes in the function
HTMLElement.prototype.hide = function() {
	this.innerHTML = '';

}
var hide = document.getElementById('hide'),
  cart = document.getElementById('totalcart');

hide.onclick = function() {
  cart.hide();
}
// HTMLElement.prototype.empty = function() {
//   var that = this;
//   while (that.hasChildNodes()) {
//     that.removeChild(that.lastChild);
//   }
// };


// function showCart(){
//   var x={};
// //   the problem is if you get ElementById this will have same results to everything
// // 
//   x.price=document.getElementById('price').innerHTML;
//   x.title=document.getElementById('title').innerHTML;
//   product.push(x);
// // this creates an element div ;
//   var iDiv = document.createElement('div');
// //   this is the id of the element
//   iDiv.id = product.length;
// //   this is the classname of the element
//   iDiv.className = 'block';
// //   this add the iDiv to the end of the page
// //   document.getElementsByTagName('body')[0].appendChild(iDiv);
// document.getElementById('totalcart').appendChild(iDiv)
//   var para = document.createElement("span");
//   var node = document.createTextNode('Meal: ' + x.title+' |                    ');
//   para.appendChild(node);

//   var element = document.getElementById(product.length);
//   element.appendChild(para);
  
//   para = document.createElement("span");
//   node = document.createTextNode('Price: '+ x.price);
//   para.appendChild(node);
  
//   element.appendChild(para);
// }