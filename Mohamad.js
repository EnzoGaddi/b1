 function changeProductImage() {
    var colorRadios = document.getElementsByName("color");
    var productImage = document.getElementById("productImage");
    var selectedColor;
    for (var i = 0; i < colorRadios.length; i++) {
        if (colorRadios[i].checked) {
            selectedColor = colorRadios[i].value;
            break;
        }
    }
    if (selectedColor === "black") {
        productImage.src = "sonyH.png";
    } else if (selectedColor === "gray") {
        productImage.src = "sonyHS.png";
    }
}
function checkColorSelection() {
    var colorRadios = document.getElementsByName("color");
    var colorMessage = document.getElementById("colorMessage");

    // Check if any radio button is checked
    var colorSelected = false;
    for (var i = 0; i < colorRadios.length; i++) {
        if (colorRadios[i].checked) {
            colorSelected = true;
            break;
        }
    }

    // Update the message based on color selection
    if (!colorSelected) {
        colorMessage.innerHTML = "Please choose a color before buying.";
    } else {
        colorMessage.innerHTML = ""; 
        changeProductImage();
       
    }
}
// Function to show the price message when Add to Cart button is clicked


let cartItems = [];

function addToCart(productIndex, price, subTotalId) {
    var quantity = parseInt(document.getElementById(`quantity${productIndex}`).value);
    var subTotal = quantity * price;

    document.getElementById(subTotalId).textContent = "Subtotal of items added: $" + subTotal.toFixed(2);
    document.getElementById(subTotalId).style.color="green";

    if (cartItems[productIndex - 1]) {
        cartItems[productIndex - 1] = subTotal;
    } else {
        cartItems.push(subTotal);
    }
}

function calculateTotalPrice() {
    var totalPrice = cartItems.reduce((acc, curr) => acc + curr, 0);

    // Display the total price
    var totalPriceDisplay = document.getElementById('totalPrice');
    totalPriceDisplay.textContent = "Total Price: $" + totalPrice.toFixed(2);
    document.getElementById("totalPrice").style.color="green";
}







