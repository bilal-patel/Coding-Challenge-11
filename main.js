// Task 2

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Task 3 -- Calculate Total Price Dynamically

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value); // select product price
    const quantity = parseInt(quantityInput.value);// entered quantity
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2); //output total cost
}
//update total price when product or quantity changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

//Task 4 - Handle Order Submission

// Handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text; // product name
    const quantity = quantityInput.value; // Quantity ordered
    const totalPrice = totalPriceElement.textContent; //output total cost
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`; //output summary
});