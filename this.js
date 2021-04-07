// not sure why I'm keeping this addcartButton; just in case might use in the future
// let addcartButton = document.getElementById('addToCart');
let totalcart = document.getElementById('totalcart');

// arrays for adding prices as well as titles for the cart
var arrayOfPrices = [];
var arrayOfTitles = [];
// get the price with this object
// return error in case nothing is pressed 
var errorElement = document.getElementById('error');
// return the final list of prices, so total price
var totalPriceElement = document.getElementById('totalprice');
// this is for the checkout form which is a todo
var checkout = document.getElementById('checkout')
// header and section 
const header = document.querySelector('header');
const section = document.querySelector('section');
    
    let requestURL = 'https://hanycopes.github.io/toc/refactored-toc/menu.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
    const superMenu = request.response;
    populateHeader(superMenu);
    showMenus(superMenu);

}
// creating headers
function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['menuName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Location: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
  header.appendChild(myPara);
}
// create forms and show menus
function showMenus(obj) {
  const allMenus = obj['allMenusJson'];
for (let i = 0; i < allMenus.length; i++) {
  const eachMenu = allMenus[i];
      for (const [key, value] of Object.entries(eachMenu)) {
        let n =0;
        while (n<1){
          const myForm = document.createElement('form');
          const myArticle = document.createElement('article');
          n++;
              for (let j = 0; j < value.length; j++) {
                  let price = value[j].price;
                  let name = value[j].name;
                  let image = value[j].img;
                  myForm.innerHTML = '<form>'+
                  '<img src="/images/'+image+'"'+'alt='+name+' style="width:65%"></img>'+
                  '<input name="title"'+'value="'+name+'" type="hidden">'
                  + '<br>' + 
                  '<h3 class="title">'+name+'</h3>'+
                  '<p class="price" >'+"$"+price+'</p>' +
                  '<br>' + 
                  '<input name="price"'+'value='+price+' type="hidden">' +
                  '<br>' + 
                  '<p><button onClick="addToCart()">Add to Cart</button></p></form>'+
                  '<p><button onClick="removeFromCart()">Remove</button></p></form>';
                  myArticle.appendChild(myForm);
                  section.appendChild(myArticle);
                  

              }
        }
      }

  }
}
// show and hide cart 
let cartButton = document.getElementById('showCartButton');
cartButton.addEventListener("click", (event)=>{
  totalcart.classList.toggle("hidden");

});
// Adds items to cart
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
    // debugger;
    arrayOfTitles.push(title);
    arrayOfPrices.push(parse_price);
    // this is for later to create a checkout form
    // checkout.innerHTML = arrayOfTitles;
    // console.log(checkout)
    console.log(arrayOfPrices);
    console.log(arrayOfTitles);
    if (arrayOfTitles.length == 0) {
      totalcart.innerHTML = "Cart Empty";
  }
    else {
    
      let sum=arrayOfPrices.reduce(function(a, b){return a+b;});
      totalcart.innerHTML = arrayOfTitles + "<br> Total Price: "+ "$"+sum;
      // let totalsum = document.getElementById("totalForm");
      // totalsum.innerHTML = "Total:"+"$"+ sum
      console.log(sum)
      // return sum;
  }
}
  price.value = "";
  
}

// remove item from cart 
function removeFromCart() {
  event.preventDefault();
  console.log(event.target.form);
  let price = event.target.form.price.value;
  let title = event.target.form.title.value;
  // debugger;
  // the problem was here I needed to change the type of price to Float so it works with 
  // an array of integers
  let parse_price = parseFloat(price);
  console.log(arrayOfPrices);
  console.log(arrayOfTitles);
  // debugger;
  const indexTitle = arrayOfTitles.indexOf(title)
  const indexPrice = arrayOfPrices.indexOf(parse_price)

  // debugger;
  errorElement.innerHTML = "";    
  // let prices = price.slice(1,6);
  // let parse_price = parseFloat(price);
  if (arrayOfPrices.length === 0){
    totalcart.textContent = "Nothing selected";
  }
  else {
    // debugger;
    if (arrayOfTitles.length == 0) {
      totalcart.innerHTML = "Cart Empty";
  }
    else { 
      // if (arrayOfPrices.length == 1) {
      //   // just remove one element
      //   console.log(arrayOfPrices)
      // }
      // else{
      // TODO: I need the id of the item how else am I going to know which item to remove
        // let sub=arrayOfPrices.reduce(function(a, b){return a-b;});
        // If meatmenu selected; delete name and price;
        
        // delete arrayOfPrices.indexPrice;
        arrayOfPrices.splice(indexPrice,1);
        arrayOfTitles.splice(indexTitle, 1);
        // pop only removes end of the array I think so I need to get the index of title
        // arrayOfTitles.splice(indexTitle,1);
        // if there is no second value use the first one as the other value
        let sum=arrayOfPrices.reduce(function(a, b){return a+b;});
        totalcart.innerHTML = arrayOfTitles + "<br> Total Price: "+ "$"+sum;

        // this is for the checkout form
        // let totalsub = document.getElementById("totalForm");
        // totalsub.innerHTML = "Total:"+"$"+ arrayOfPrices
       
    }
      // return sum;
  
}
  price.value = "";
  
}
// let cartButton = document.getElementById('showCartButton');
// cartButton.addEventListener("click", (event)=>{
//   totalcart.classList.toggle("hidden");

// });
// clearing what is inside the cart
function clearNode(){
  // debugger;
  totalcart.textContent = 'Cart is Empty now'
  // totalPriceElement.textContent = 'No prices';
  // checkout.innerHTML = "";
  arrayOfTitles.splice(0, arrayOfTitles.length);
  arrayOfPrices.splice(0, arrayOfPrices.length);

  console.log(arrayOfTitles)

}
// TODO: create a little cart icon 
// THE checkout function
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