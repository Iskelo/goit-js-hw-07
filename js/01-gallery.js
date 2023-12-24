import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImgs = document.querySelector('.gallery');

const marcup = galleryItems.map(({description: desc, preview: prev, original: org}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${org}">
    <img
      class="gallery__image"
      src="${prev}"
      data-source="${org}"
      alt="${desc}"
    />
  </a>
</li>
`);

containerImgs.insertAdjacentHTML('beforeend', marcup.join(''));

containerImgs.addEventListener('click', onClick);
document.addEventListener('keydown', onKeydown);

let instance = '';

function onClick(event) {
	event.preventDefault();
	const {source} = event.target.dataset;
	const {alt} = event.target;
	instance = basicLightbox.create(`
	<img
		class="gallery__image"
		src="${source}"	
		alt="${alt}"
	/>
	`);
	instance.show()
}

function onKeydown(evt) {	
	if (evt.key === 'Escape') {
		instance.close()
	}
}
