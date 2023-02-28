import { galleryItems } from "./gallery-items.js";
const gallerySelect = document.querySelector(".gallery");
const imagesToAdd = galleryItems
  .map(
    (galleryItem) =>
      `<div class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}"><img class= "gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join("");
gallerySelect.insertAdjacentHTML("beforeend", imagesToAdd);
var gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
