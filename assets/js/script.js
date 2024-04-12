// Product Items Quantity and Add to Cart
let increase = document.querySelector( '.increase' );
let decrease = document.querySelector( '.decrease' );
let quantity = document.querySelector('.quantity');
let button = document.querySelector( '.addTocart' );
let val = parseInt(quantity.textContent);

// Change Images
let imgs = document.querySelectorAll('.thumbImages > img');
let arr = ['assets/img/image-product-1.jpg',
            'assets/img/image-product-2.jpg',
            'assets/img/image-product-3.jpg',
            'assets/img/image-product-4.jpg'];
imgs.forEach((img, index)=>{
    img.style.width = '100px';
    img.addEventListener('click', ()=>{
        let cartImg = document.querySelector('#mainImage');
        img.style.cursor = 'pointer';
        cartImg.src = arr[index];
        console.log('clicked');
    })
})


// Increase Item
increase.addEventListener( 'click', function() {
    if(val<10){
        val++;
        quantity.textContent = val;
        console.log('Increased');
        singleCart();
    }
})
// Decrease Item
decrease.addEventListener( 'click', function() {
    if(val>1){
        val--;
        quantity.textContent = val;
        console.log('Decreased');
        singleCart();
    }
})

// Cart Section
let cartButton = document.querySelector( '#cartButton' );
let sup = document.querySelector( '#sup' );
let cart = document.querySelector( '#cart' );
let deleteCarts = document.querySelectorAll( '.deleteCart' );
let cartQuantity = document.querySelector( '.cartQuantity' );
let cartPrice = document.querySelector( '.cartPrice' );
let cartTotal = document.querySelector( '.cartTotal' );

// Cart Icon Click
cartButton.addEventListener('click', () => {
    if(cart.style.display == 'block'){
        cart.style.display = 'none';
        console.log('Cart Item Hidden');
    }else{
        cart.style.display = 'block';
        console.log('Cart Item Visible');
    }
})
// Delete cart
deleteCarts.forEach(deleteCart=>{
    deleteCart.addEventListener('click', ()=>{
        let cartItem = deleteCart.closest('.cartItem');
        cartItem.remove();
        console.log('Cart Item deleted');
    })
})
// Single Cart Item
let singleCart = () => {
    let cartItems = document.querySelectorAll('.cartItem');
    // Loop through each cart item
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let cartQuantity = cartItem.querySelector('.cartQuantity');
        let cartPrice = cartItem.querySelector('.cartPrice');
        let cartTotal = cartItem.querySelector('.cartTotal');
        let price = parseFloat(cartPrice.innerText.replace('$', ''));
        let quantity = parseFloat(cartQuantity.innerText = val);
        let total = '$';
        total = total + (price * quantity);
        cartTotal.innerText = total;
    }
};

// Add to Cart
let addCart = document.querySelector('.addToCart');
addCart.addEventListener('click', addCartSection);

function addCartSection(){
    let cartImg = document.querySelector('#mainImage').src;
    let title = document.querySelector('.title').innerText;
    let priceText = document.querySelector('.price').innerText;
    let price = parseFloat(priceText.replace('$', ''));
    let quantity = parseFloat(document.querySelector('.quantity').innerText);
    let total = '$';
    total += price * quantity;
    addToCart(title, price, cartImg, quantity, total);
}
function addToCart(title, price, cartImg, quantity, total){
    let cartCount = 0;
    let cart = document.querySelector('.cartAllItems');
    let div = document.createElement('ul');
    let existingTitle = document.querySelectorAll('.cartItem h4');
    cart.append(div);
    for(let item of existingTitle){
        if(item.innerText.includes(title)){
            alert('Item already has been Ordered!');
            return;
        }
    }
    let cartItemContent = `
    <ul class="cartItem flex items-center justify-between">
    <li><img class="w-[60px] rounded-lg" src="${cartImg}" alt=""></li>
    <li>
    <h4 class="text-base text-dark-grey-blue">${title}<br><span class="cartPrice">${price}</span> x <span class="cartQuantity">${quantity}</span> = <span class="cartTotal text-black text-lg font-bold">${total}</span></h4>
    </li>
    <li><button class='deleteCart' href=""><img src="assets/img/icon-delete.svg" alt=""></button></li>
    </ul>`
    div.innerHTML = cartItemContent;
    let deletebtn = div.querySelector('.deleteCart');
    deletebtn.addEventListener('click', (e)=>{
        e.preventDefault();
        div.remove();
        sup.textContent = '';
    })
    cartCount++;
    sup.textContent = cartCount;
}

// Purchase Done
let purchasebtn = document.querySelector('#purchase');
purchasebtn.addEventListener('click', purchase);
function purchase(){
    alert('Thank you for the Purchase');
    let cartAllItems = document.querySelector('.cartAllItems');
    while(cartAllItems.hasChildNodes()){
        cartAllItems.removeChild(cartAllItems.firstChild);
    }
    let h4 = document.createElement('h4');
    h4.innerText = 'Your cart is empty';
    h4.style.textAlign = 'center';
    h4.style.padding = '20px';
    cartAllItems.append(h4);
    sup.textContent = '';
}

// Hamburger
let menu = document.querySelector('#menu');
let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let id = null;
let pos = 0;
menu.addEventListener('click', ()=>{
    setInterval(() => {
        if(hamburger.style.left = '180px'){
            clearInterval(id);
        }else{
            pos++;
            hamburger.style.display = 'block';
            hamburger.style.opacity = '1';
            hamburger.style.left = '180px';
            hamburger.style.transition = '3s';
        }
    }, 2000);
})
close.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
})