function deleteCart(cart_id) {
    let remove = confirm("Are you sure you want to remove it?");
    
    if(remove == true){
        var cart = document.getElementById(cart_id);

        if(cart.style.display !== 'none'){
            cart.style.display = "none";
        }
    }
}


function changeValue(price, quantity, sub) {
    let productQuantity = document.getElementById(quantity).value;

    let productPrice = document.getElementById(price).innerHTML;

    if(productPrice.includes(',')){
        productPrice = productPrice.replace(",", "");
    }

    let subPrice = parseInt(productPrice) * parseInt(productQuantity);

    document.getElementById(sub).innerHTML = subPrice;

    document.getElementById("total").innerHTML = parseInt(document.getElementById("cartProductPrice1").innerHTML) + parseInt(document.getElementById("cartProductPrice2").innerHTML);
}

changeValue('cart-product-1', 'cart-quantity-1', 'cartProductPrice1');
changeValue('cart-product-2', 'cart-quantity-2', 'cartProductPrice2');
