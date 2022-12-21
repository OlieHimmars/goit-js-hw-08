import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const imagesMarkup = galleryHandler(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

function galleryHandler(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a >`;
        })
        .join("");
};