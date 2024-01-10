import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDiv = document.querySelector(".gallery");
const markup = (images) => {
  return images
    .map((image) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href=${image.original}>
                <img class="gallery__image" src=${image.preview} alt=${image.description} title=${image.description}/>
            </a>
        </li>
        `;
    })
    .join("");
};
galleryDiv.insertAdjacentHTML("afterbegin", markup(galleryItems));
let gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionDelay: 250,
});

console.log(galleryItems);
