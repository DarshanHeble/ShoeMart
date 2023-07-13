const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");
const homeMenu = document.querySelector(".homeMenu");

bars.addEventListener("click", () => {
    bars.style.display = "none";
    cross.style.display = "unset";
    homeMenu.style.height = "auto";
})

cross.addEventListener("click", () => {
    bars.style.display = "unset";
    cross.style.display = "none";
    homeMenu.style.height = "0px";
})

let cart = document.querySelectorAll('.addtocart');

let products = [
    {
        name: 't1shirt',
        tag: 't1shirt',
        price: 15,
        incart: 0
    },

    {
        name: 't2shirt',
        tag: 't2shirt',
        price: 15,
        incart: 0
    },
    {
        name: 't3shirt',
        tag: 't3shirt',
        price: 15,
        incart: 0
    },
    {
        name: 't4shirt',
        tag: 't4shirt',
        price: 15,
        incart: 0
    },

];

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumber();
    })
}

function cartNumber() {
    let productsNumber = localStorage.getItem('cartNumber');
    productsNumber = parseInt(productsNumber);

    if (productsNumber) {
        localStorage.setItem('cartNumber', productsNumber + 1);
        document.querySelector('.cart span').textContent = productsNumber + 1;
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}
