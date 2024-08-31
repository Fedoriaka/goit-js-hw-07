import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `  <li class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img class="gallery__image" src="${preview}" data-source = "${original}" alt="${description}" />
      </a>
    </li>
  `;
  })
  .join("");
container.innerHTML = gallery;

container.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const largeImage = event.target.dataset.source;

    const instance = basicLightbox.create(
      `
    <img src="${largeImage}"  width="1400" height="900">
`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onEscKeyPress);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onEscKeyPress);
        },
      }
    );

    instance.show();

    function onEscKeyPress(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }
});

console.log(galleryItems);
