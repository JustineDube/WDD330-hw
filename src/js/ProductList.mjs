import { renderListWithTemplate } from "./utils.mjs";

export function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/?product=${product.Id}.html">
      <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">$${product.ListPrice}</p>
    </a>
  </li>`
}

export class ProductList{
  constructor(dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const data = await this.dataSource.getData();
    this.renderList(data); 
  }
  
 

   async renderList(productList) {
    renderListWithTemplate(productCardTemplate, this.listElement, productList, 'beforeend', false); 
    }
}