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

function onClick(event) {
	event.preventDefault();
	const {source} = event.target.dataset;
	const {alt} = event.target;
	const options = {
		onShow: (instance) => {
			window.addEventListener('keydown', handleKeyDown);
		 },
		 onClose: (instance) => {
			window.removeEventListener('keydown', handleKeyDown);
		 }
	}

	if (!event.target.classList.contains('gallery__image')) {
		return;
	}

	const instance = basicLightbox.create(`
	<img
		class="gallery__image"
		src="${source}"
		alt="${alt}"
	/>
	`, options);

	instance.show()
	
	function handleKeyDown(evt) {
		if (evt.key === 'Escape') {
		  instance.close();
		}
	 }
}

