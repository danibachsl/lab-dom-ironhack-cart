// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceElem = product.querySelector('.price span'); 
  
  let price = Number(priceElem.innerText);
  
  let quantityElem = product.querySelector('.quantity input');
  
  let quantity = Number(quantityElem.value);
  let subtotalElem = product.querySelector('.subtotal span');
  subtotalElem.innerText = price * quantity;
  
  return Number(subtotalElem.innerText);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  array.forEach(element => {
    Array.from();
  });

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.addEventListener('click', updateSubtotal);
});
