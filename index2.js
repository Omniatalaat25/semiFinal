

const BASE_URL = "http://localhost:3000";
const categories_container = document.querySelector(".categories_container");
const products_container = document.querySelector(".products_container");
const product = document.querySelectorAll(".product")
const button = document.querySelectorAll("button")
const renderCartData = document.querySelector(".renderCartData")
let activeSlug;

async function getAllCategories() {
    const res = await fetch(`${BASE_URL}/categories`)
    const finalRes = await res.json()
    displayCategories(finalRes)
    return finalRes;
}
getAllCategories();

async function getAllProducts(activeSlug) {
    const res = await fetch(`${BASE_URL}/Products?categorySlug=${activeSlug}`)
    const finalRes = await res.json()
    displayProducts(finalRes)

    function addToCart(image,price) {
        renderCartData.appendChild(pro.image)
        renderCartData.appendChild(pro.title)
        renderCartData.appendChild(pro.price)
        
    }
    button.addEventListener("click", () => addToCart(pro.image,pro.price))
}
getAllProducts(meal)
getAllCategories();

function displayCategories(data) {
    let temp = ``
    data.forEach((cat) => 
        (temp += `
        <div class="category_item_container ${cat.slug == activeSlug ? "active" : ""}" onClick="handleActiveCat('${cat.slug}')" >
                        <div class="category_image">
                            <i></i>
                            <img src=${cat.image} alt="">
                        </div>
                        <h6>${cat.title}</h6>
                        
        </div>
        `),
    );
    categories_container.innerHTML += temp;
}

function displayProducts(data) {
    let temp = ``
    data.forEach((pro) => 
        (temp += `
                     <div class="product">
                    <i class="fa-solid fa-shield-heart"></i>
                    <img src="${pro.image}" alt="">
                    <div class="rate-price">
                        <div class="price-rate">
                            <p class="price">${pro.price}</p>
                            <div class="rate">
                                <i class="fa-solid fa-star"></i>
                                <p class="p2">${pro.rate}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="p">
                            <p>${pro.title}</p>
                        </div>
                        <div class="choice">
                            <i class="fa-regular fa-circle-check"></i>
                            <p>${pro.pieces}</p>
                        </div>
                        <div class="choice">
                            <i class="fa-regular fa-circle-check"></i>
                            <p>${pro.type}</p>
                        </div>
                        <button onclick="addToCart('${pro.id}')">Add To Cart</button>
                    </div>
                </div>
        `),
    );
    products_container.innerHTML = temp;
}

async function handleActiveCat (cat) {
    getAllProducts(cat)
}

// Cart

// const cart = [];
// const wishlist = [];
// const button = document.querySelector("button")

// function updateCart () {
//     const cartItems = document.getElementById("cart-items")
//     const cartMessage = document.getElementById("cart-message")
//     cartItems.innerHTML = ""
//     if (cart.length === 0){
//         cartMessage.style.display = "block"
//     }else{
//         cartMessage.style.display = "none"
//         cart.forEach(item =>{
//             const div = document.createElement("div")
//             div.className = "cart-item"
//             div.innerHTML = `${item.name} - ${item.price}
//             <button onclick="removeFromCart(${item.id})">Remove</button>`;
//             cartItems.appendChild(div)
//         })
//     }
// }
    
// function addToCart(productId) {
//     const product = products.find(p=>p.id === productId)
//     if(!cart.includes(product)){
//         cart.push(product)
//         updateCart()
//     }
// }







