const filterTools = document.querySelector(".filter-tools")
const contFilterTools = document.querySelector(".cont-filter-tools")
const toolsBtn = document.querySelector(".tools-btn")
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
    if (filterPrice.style.display === "none") {
        contFilterTools.style.display = "flex"
        filterPrice.style.display = "flex"
        maxMinPrice.style.display = "flex"
    }
    else {
        contFilterTools.style.display = "none"
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

toolsBtn.addEventListener("click", function enableCategory() {
    if (filterTools.style.display === "flex") {
        filterTools.style.display = "none"
    } else {
        filterTools.style.display = "flex"
    }
})

/* Сокрытие элементов не подходящих под условие */
const filterGoods = filterClass => {
    updateFilterProduct();
    const startPrice = parseFloat(document.getElementById("start-price").value);
    const finishPrice = parseFloat(document.getElementById("finish-price").value);

    filterProducts.forEach(element => {
        const price = parseFloat(element.getAttribute('data-price'));
        const isInPriceRange = price >= startPrice && price <= finishPrice;
        const isVisibleCategory = element.classList.contains(filterClass) || filterClass === 'all';

        if (isVisibleCategory && isInPriceRange) {
            element.classList.remove('hide');
        } else {
            element.classList.add('hide');
        }
    });
}

/* Обработка нажатия на категорию */
document.querySelector('.filter-tools').addEventListener('click', event => {
    if (event.target.tagName !== 'P') return;

    let filterClass = event.target.dataset['f'];
    filterGoods(filterClass);
    window.location.hash = event.target.dataset['f'];
});

/* Сохранение в хэш */
if (window.location.hash) {
    filterGoods(window.location.hash.slice(1));
}

filterAccept.addEventListener('click', () => {
    const filterClass = window.location.hash.slice(1) || 'all'; // Получение класса фильтра из хэша или 'all' по умолчанию
    filterGoods(filterClass); // Применение фильтрации с учетом цены
});



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
