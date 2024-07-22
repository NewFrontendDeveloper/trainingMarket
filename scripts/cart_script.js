const ITEMS = [
    {
        id: 1,
        name: 'Apple iPhone 13, 128 ГБ',
        price: 73990,
        hitPrice: 80000,
        Image: "/pic/iphone15.png",
        dataF: 'phone',
        dataPrice: 73990,
        qty: 1
    },
    {
        id: 2,
        name: 'Игровая приставка Nintendo Switch OLED Splatoon 3 Edition 64 Гб, цветной',
        price: 40990,
        hitPrice: 55000,
        Image: "/pic/gamepad.png",
        dataF: 'play',
        dataPrice: 40990,
        qty: 1
    },
    {
        id: 3,
        name: 'Apple iPad Pro (2022) 11" Wi-Fi 256 ГБ',
        price: 109990,
        hitPrice: 129000,
        Image: "/pic/ipad.png",
        dataF: 'tablet',
        dataPrice: 109990,
        qty: 1
    },
    {
        id: 4,
        name: 'Наушники накладные Anker Soundcore Space One, черный',
        price: 8990,
        hitPrice: 12900,
        Image: "pic/ambushurs.png",
        dataF: 'music',
        dataPrice: 8990,
        qty: 1
    },
    {
        id: 5,
        name: 'Apple Watch SE 2023',
        price: 30990,
        hitPrice: 42500,
        Image: "/pic/watch-apple.png",
        dataF: 'watch',
        dataPrice: 30990,
        qty: 1
    },

    {
        id: 6,
        name: 'Беспроводные наушники Marshall Major IV, черный',
        price: 12990,
        hitPrice: 17000,
        Image: "/pic/ushi_pixian_ai.png",
        dataF: 'music',
        dataPrice: 12990,
        qty: 1
    },
    {
        id: 7,
        name: 'Акустика портативная Marshall Acton III, коричневый',
        price: 39990,
        hitPrice: 44500,
        Image: "/pic/kombik_pixian_ai.png",
        dataF: 'music',
        dataPrice: 39990,
        qty: 1
    },
    {
        id: 8,
        name: 'Акустика портативная JBL Pulse 5, черный',
        price: 22990,
        hitPrice: 28500,
        Image: "/pic/jbl_pixian_ai.png",
        dataF: 'music',
        dataPrice: 22990,
        qty: 1
    },
    {
        id: 9,
        name: 'Геймпад Sony DualSense Wireless Controller для PS5, камуфляж',
        price: 10990,
        hitPrice: 14500,
        Image: "pic/gamepade_pixian_ai.png",
        dataF: 'play',
        dataPrice: 10990,
        qty: 1
    },
    {
        id: 10,
        name: 'Игровая приставка Sony PlayStation 5 Slim с дисководом',
        price: 64990,
        hitPrice: 79900,
        Image: "/pic/ps5_pixian_ai.png",
        dataF: 'play',
        dataPrice: 64990,
        qty: 1
    },



    {
        id: 11,
        name: 'Акустика портативная Harman Kardon Onyx Studio 8, бежевый',
        price: 73990,
        hitPrice: 80500,
        Image: "/pic/harman_pixian_ai.png",
        dataF: 'music',
        dataPrice: 73990,
        qty: 1
    },
    {
        id: 12,
        name: 'Сетевое зарядное устройство UGREEN CD333 Nexode 4хUSB-C + USB-A, 300 Вт PD, GaN, серый',
        price: 40990,
        hitPrice: 46500,
        Image: "/pic/power_pixian_ai.png",
        dataF: 'accessories',
        dataPrice: 40990,
        qty: 1
    },
    {
        id: 13,
        name: 'Беспроводное зарядное устройство Satechi Dock5 Multi-Device Charging Station, серый космос',
        price: 19990,
        hitPrice: 25900,
        Image: "/pic/power-bord_pixian_ai.png",
        dataF: 'accessories',
        dataPrice: 19990,
        qty: 1
    },
    {
        id: 14,
        name: 'Акустика портативная Яндекс Станция Макс 2.0 с Zigbee и пультом, зеленый',
        price: 19990,
        hitPrice: 25900,
        Image: "pic/alica_pixian_ai.png",
        dataF: 'music',
        dataPrice: 19990,
        qty: 1
    },
    {
        id: 15,
        name: 'OnePlus 10T 8/128Gb US black (черный)',
        price: 31990,
        hitPrice: 64900,
        Image: "/pic/OnePlus_pixian_ai.png",
        dataF: 'phone',
        dataPrice: 31990,
        qty: 1
    },

]


const modal = document.getElementById("cont-modal-window-cart");
const cartBtn = document.getElementById("main-cont-cart");
const modalWindow = document.getElementById("modal-window-cart");
const exitBtn = document.getElementById("modal-btn-exit");
const itemsEl = document.querySelector(".cont-all-products")
const cartItems = document.querySelector(".cart-items")
const countCart = document.querySelector(".count-cart");
const totalPrice = document.querySelector(".subtotal-cart-price")

var cart_data = []

function modalOpen() {
    modal.style.display = "flex";
};

function modalClose() {
    modal.style.display = "none";
};

cartBtn.onclick = modalOpen;

window.onclick = function (event) {
    if (event.target === modal) {
        modalClose();
    }
}

exitBtn.onclick = modalClose;

//Добавление товара в корзину
function addToCart(idx, itemId) {
    const foundedItem = cart_data.find((item) => item.id.toString() === itemId.toString())

    if (foundedItem) {
        plusQty(itemId)
    }
    else {
        cart_data.push(ITEMS[idx])
    }
    updateCart()
}

//КНопка удаления товара
function removeItem(itemId) {
    cart_data = cart_data.filter((item) => item.id != itemId);

    updateCart();
}


function plusQty(itemId) {
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty + 1 } : item)

    updateCart()
}

function minusQty(itemId) {
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty } : item)

    updateCart();
}

//Подсчет финальной стоимости
function calcCount() {
    var itemsCount = 0;

    cart_data.forEach((item) => (itemsCount += item.qty))

    countCart.innerText = itemsCount;
}

function calcTotalPrice() {
    var subtotal = 0;

    cart_data.forEach((item) => (subtotal += item.price * item.qty))
    totalPrice.innerText = subtotal;
}

renderItems()
renderCartItems()

//Визуализация элементов
function renderItems() {
    ITEMS.forEach((item, idx) => {
        const itemEl = document.createElement('div')
        itemEl.classList.add('products-card', `${item.dataF}`)
        itemEl.setAttribute('data-price', `${item.dataPrice}`)
        itemEl.onclick = () => addToCart(idx, item.id)
        itemEl.innerHTML = `
            <div class="card-img">
                <img src="${item.Image}" alt="phone" class="hit-img">
            </div>
            <p class="title-products">"${item.name}"</p>
            <div class="foter-info">
                <div class="price-hit-price">
                    <span class="price">${item.price}р</span>
                    <s class="hit-price">${item.hitPrice}р</s>
                </div>
                <button class="add-to-cart-btn"><ion-icon name="cart" class="icon"></ion-icon></button>
            </div>
        `
        itemsEl.appendChild(itemEl)
    })

}

//Визуализация элементов корзины
function renderCartItems() {
    cartItems.innerHTML = ''
    cart_data.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add('cart-item')
        cartItem.innerHTML = `
        <div class="cart-item-img">
                            <img src="${item.Image}" alt="">
                        </div>
                        <div class="item-cart-details">
                            <p>${item.name}</p>
                            <strong>${item.price}р</strong>
                            <div class="qty">
                                <span onclick="minusQty(${item.id})">-</span>
                                <strong>${item.qty}</strong>
                                <span onclick="plusQty(${item.id})">+</span>
                            </div>
                        </div>
                        <div class="remove-cart-item" onclick = "removeItem(${item.id})">
                            <span>&times;</span>
                        </div>
        `
        cartItems.appendChild(cartItem)
    })
}

function updateCart() {
    //Обновляем
    renderCartItems()

    calcCount()

    calcTotalPrice();
}
