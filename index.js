const categories = document.querySelectorAll('.category');
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const categoryList = document.getElementById('category-list');

const products = {
  category1: [
    { name: 'Гаманець чоловічий', price: 100 },
    { name: 'Гаманець жіночий', price: 200 },
    { name: 'Гаманець унісекс', price: 300 }
  ],
  category2: [
    { name: 'Сумка чоловіча', price: 150 },
    { name: 'Сумка жіноча', price: 250 },
    { name: 'Сумка унісекс', price: 350 }
  ],
  category3: [
    { name: 'Ремінь чоловічий', price: 120 },
    { name: 'Ремінь жіночий', price: 220 },
    { name: 'Ремінь унісекс', price: 320 }
  ]
};


function handleCategoryClick() {
  const category = this.getAttribute('data-category');
  const categoryProducts = products[category];
  
  renderProductList(categoryProducts);
  clearProductDetails();
}


function handleProductClick() {
  const productName = this.getAttribute('data-product');
  const productPrice = this.getAttribute('data-price');
  
  renderProductDetails(productName, productPrice);
}


function handleBuyButtonClick() {
  alert('Товар куплений');
  clearProductDetails();
  clearProductList();
  renderCategories();
}


function renderCategories() {
  categoryList.style.display = 'block';
}


function renderProductList(categoryProducts) {
  productList.innerHTML = '';
  
  categoryProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;
    listItem.setAttribute('data-product', product.name);
    listItem.setAttribute('data-price', product.price);
    listItem.addEventListener('click', handleProductClick);
    
    productList.appendChild(listItem);
  });
}

function clearProductDetails() {
  productDetails.innerHTML = '';
}


function clearProductList() {
  productList.innerHTML = '';
}


function renderProductDetails(productName, productPrice) {
  const details = document.createElement('div');
  details.innerHTML = `
    <h3>${productName}</h3>
    <p>Цена: ${productPrice}</p>
    <button id="buy-button">Купить</button>
  `;
  
  const buyButton = details.querySelector('#buy-button');
  buyButton.addEventListener('click', handleBuyButtonClick);
  
  productDetails.innerHTML = '';
  productDetails.appendChild(details);
}


categories.forEach(category => {
  category.addEventListener('click', handleCategoryClick);
});
