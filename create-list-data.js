// Example - https://www.zillow.com/ca/

const addressElements = document.querySelectorAll('address[data-test="property-card-addr"]');
const priceElements = document.querySelectorAll('span[data-test="property-card-price"]');

const list = [];

addressElements.forEach((addressElement, i) => {
  list.push({
    address: addressElement.innerHTML,
    price: priceElements[i].innerHTML,
  });
});

// const newDiv = document.createElement("div");

// const appendDiv = document.querySelector(".search-list-save-search-parent");

// appendDiv.appendChild(newDiv);

// list.forEach((item) => {
//   newDiv.innerHTML = newDiv.innerHTML + "<br />" + item.address;
// });

console.log(list);
