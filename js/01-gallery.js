import { galleryItems } from "./gallery-items.js";
const gallerySelect = document.querySelector(".gallery");
console.log(gallerySelect);
const imagesToAdd = galleryItems
  .map(
    (galleryItem) =>
      `<div class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}"><img class= "gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join("");
gallerySelect.insertAdjacentHTML("beforeend", imagesToAdd);
document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  var instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1400" height="900"> `
  );
  instance.show();
  gallerySelect.addEventListener("keydown", (event) => {
    if (event.key === "Escape") instance.close();
  });
};
