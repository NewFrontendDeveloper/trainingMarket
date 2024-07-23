const filterTools = document.querySelector(".filter-tools")
const filterPrice = document.querySelector(".filter-price")
const filter = document.getElementById("filter-img");
const filterNav = document.querySelectorAll("filter-tools p")
const maxMinPrice = document.querySelector(".max-min-price")
const maxMinPriceP = document.querySelector(".max-min-btn")
const maxMin = document.querySelector(".max-min")
const filterProducts = document.querySelectorAll(".products-card")

const filterAccept = document.getElementById("filter-accept-img")


const updateFilterProduct = () => { filterProducts }


function filterToggle() {
    if (filterTools.style.display === "none") {
        filterTools.style.display = "flex"
        filterPrice.style.display = "flex"
        maxMinPrice.style.display = "flex"
    }
    else {
        filterTools.style.display = "none"
        filterPrice.style.display = "none"
        maxMinPrice.style.display = "none"
    }
}

filter.onclick = filterToggle;


maxMinPriceP.addEventListener("click", function PrioritetToggle() {
    if (maxMin.style.display === "flex") {
        maxMin.style.display = "none"
    } else {
        maxMin.style.display = "flex"
    }
})

/* Сокрытие элементов не подходящих под условие */
const filterGoods = filterClass => {

    /*     filterNav.forEach(item => item.classList.remove('active'));
        const active = document.querySelector(`[data-f="${filterClass}"]`);
        if (active) active.classList.add('active'); */

    updateFilterProduct();
    filterProducts.forEach(element => {
        element.classList.remove('hide');
        if (!element.classList.contains(filterClass) && filterClass != 'all') {
            element.classList.add('hide')
        }
    });
}

/* Обработка нажатия на категорию */
document.querySelector('.filter-tools').addEventListener('click', event => {
    if (event.target.tagName !== 'P') return

    let filterClass = event.target.dataset['f'];
    filterGoods(filterClass);
    window.location.hash = event.target.dataset['f']
});
/* сохранение в хэш */
if (window.location.hash) {
    filterGoods(window.location.hash.slice(1));
}


/* сортировка по цене от меньшего к большему */
document.querySelector("#sort-asc").addEventListener("click", priceSort)
document.querySelector("#sort-desc").addEventListener("click", priceSortDesc)

function priceSort() {
    var contAllProducts = document.querySelector(".cont-all-products")
    for (var i = 0; i < contAllProducts.children.length; i++) {
        for (var j = i; j < contAllProducts.children.length; j++) {
            if (+contAllProducts.children[i].getAttribute('data-price') > +contAllProducts.children[j].getAttribute('data-price')) {
                replaceNode = contAllProducts.replaceChild(contAllProducts.children[j], contAllProducts.children[i])
                insertAfter(replaceNode, contAllProducts.children[i])
            }
        }
    }
}

function insertAfter(e, refE) {
    return refE.parentNode.insertBefore(e, refE.nextSibling);
}


/* сортировка по цене от большего к меньшему */
function priceSortDesc() {
    var contAllProducts = document.querySelector(".cont-all-products")
    for (var i = 0; i < contAllProducts.children.length; i++) {
        for (var j = i; j < contAllProducts.children.length; j++) {
            if (+contAllProducts.children[i].getAttribute('data-price') < +contAllProducts.children[j].getAttribute('data-price')) {
                replaceNode = contAllProducts.replaceChild(contAllProducts.children[j], contAllProducts.children[i])
                insertAfter(replaceNode, contAllProducts.children[i])
            }
        }
    }
}

/* Вставка элемента e после refE */
function insertAfter(e, refE) {
    return refE.parentNode.insertBefore(e, refE.nextSibling);
}


/* Фильтр товаров по диапозону цен */
function filterRangePrice() {
    const startPrice = document.getElementById("start-price").value;
    const finishPrice = document.getElementById("finish-price").value;

    const updateStartPrice = () => { startPrice }
    const updateFinishPrice = () => { finishPrice }

    updateFinishPrice()
    updateStartPrice()
    var contAllProducts = document.querySelector(".cont-all-products")
    for (var i = 0; i < contAllProducts.children.length; i++) {
        if (contAllProducts.children[i].classList == "hide") {
            return
        }
        else {
            var price = +contAllProducts.children[i].getAttribute('data-price')
            if (price >= startPrice && price <= finishPrice) {
                contAllProducts.children[i].classList.remove('hide')
            }
            else {
                contAllProducts.children[i].classList.add('hide')
            }
        }

    }
}

filterAccept.addEventListener('click', filterRangePrice)

