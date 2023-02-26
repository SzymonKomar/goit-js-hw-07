const gallerySelect = document.querySelector(".gallery");
console.log(gallerySelect);
const imagesToAdd = galleryItems
  .map(
    (galleryItem) =>
      `<div class ="gallery__item"><a class ="gallery__link" href ="${galleryItem.original}"><img class= "gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`
  )
  .join("");
console.log(imagesToAdd);
gallerySelect.insertAdjacentHTML("beforeend", imagesToAdd);
