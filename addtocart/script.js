const carts = document.querySelectorAll('.addToCart');

let products = [
    {
        name: "/images/Boots/boots/img (1).jpg",
        // name: "Pink Shoe",
        tag: "pinkshoe",
        price: 300,
        incart: 0
    },
    {
        name: "/images/Boots/boots (2)/img (1).jpg",
        tag: "binkshoe",
        price: 200,
        incart: 0
    },
    {
        name: "/images/Boots/boots (3)/img (1).jpg",
        tag: "blackshoe",
        price: 100,
        incart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}
function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(products);
}

function setItem(products) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems, [products.tag]: products
            }
        }
        cartItems[products.tag].incart += 1;
    } else {
        products.incart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
    // console.log("my cart cost is ", products.price);

    let cartCost = localStorage.getItem("totalCost");
    console.log("my cart cost is ", cartCost);
    console.log(typeof cartCost);
    console.log("my cart cost is ", cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
            products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.querySelector(".products")

    if (cartItems && productsContainer) {
        productsContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productsContainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-xmark"></i>
                <img src="${item.name}" alt="1" height="200px">
                <span>Pink Shoe</span>
            </div>`
        })
    }

}

displayCart()
onLoadCartNumber()