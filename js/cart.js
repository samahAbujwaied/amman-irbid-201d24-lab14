/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('Cart'));
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let tableEl = document.getElementById('cart');
let array1 = [];
let array2 = [];
let tableBody = document.createElement('tbody');
function showCart() {
  // TODO: Find the table body
  tableEl.appendChild(tableBody);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  array1 = JSON.parse(localStorage.getItem('quantity'));
  array2 = JSON.parse(localStorage.getItem('Cart'));
  if (array1 !== null && array2 !== null) {
    for (let i = 0; i < array1.length; i++) {
      let trEl = document.createElement('tr');
      tableBody.appendChild(trEl);
      let tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = 'x';
      let tdEl2 = document.createElement('td');
      trEl.appendChild(tdEl2);
      tdEl2.textContent = array1[i];
      let tdEl3 = document.createElement('td');
      trEl.appendChild(tdEl3);
      tdEl3.textContent = array2[i];
    }
  }
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for (let i = 0; i < array1.length; i++) {
    tableEl.deleteRow(tableEl.rows[i]);
  }
}

let anything = 0;
function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  console.log('something');
  var id = event.target.id;
  for (var i = 0; i < array2.length; i++) {
    if (array2[i].id === id) {
      var item = document.getElementsByClassName(array2[i].id)[0];
      tableBody.removeChild(item);
      array2.splice(i, 1);
      localStorage.setItem('Cart', JSON.stringify(array2));
      location.reload();
    }
  }
}

// This will initialize the page and draw the cart on screen
renderCart();