import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = (images) => {
  return images
    .map((image) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
            />
        </a>
        </li>
    `;
    })
    .join("");
};
gallery.insertAdjacentHTML("afterbegin", markup(galleryItems));

const onImageClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const src = e.target.dataset.source;
  console.log(src);
  const modal = basicLightbox.create(
    `
   <img src=${src} width="800" height="600">
`
  );
  modal.show();
  const onEscapePress = (e) => {
    if (e.key === "Escape") {
      modal.close();
      document.removeEventListener("keydown", onEscapePress);
    }
  };
  document.addEventListener("keydown", onEscapePress);
};

gallery.addEventListener("click", onImageClick);

console.log(galleryItems);
