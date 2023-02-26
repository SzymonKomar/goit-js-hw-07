import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line
const gallerySelect = document.querySelector(".gallery");
console.log(gallerySelect);
const imagesToAdd = galleryItems
  .map(
    (galleryItem) =>
      `<div class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}"><img class= "gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join("");
gallerySelect.insertAdjacentHTML("beforeend", imagesToAdd);
