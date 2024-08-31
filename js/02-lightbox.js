import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");
const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `  <li class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img class="gallery__image" src="${preview}"  alt="${description}" />
      </a>
    </li>
  `;
  })
  .join("");
container.innerHTML = gallery;
new SimpleLightbox(".gallery a", {
  captionsData: "alt", 
  captionDelay: 250,
});
console.log(galleryItems);
