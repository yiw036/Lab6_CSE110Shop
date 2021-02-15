// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO

  var item = JSON.parse(localStorage.getItem('products'));
  var productList = document.getElementById('product-list');

  if (localStorage.getItem('products') == null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('products', JSON.stringify(data));
    });

  } else {    
    for(let i = 0; i < item.length; i++){
      productList.appendChild(new ProductItem(item[i]));
    }
  }
  
});
