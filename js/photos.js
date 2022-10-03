import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from '/js/photoswipe.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
	gallery: '#gallery',
	children: 'a',
	pswpModule: PhotoSwipe
});

lightbox.on('uiRegister', function() {
	lightbox.pswp.ui.registerElement({
		name: 'download-button',
		ariaLabel: 'Download',
		order: 8,
		isButton: true,
		tagName: 'a',
		html: {
			isCustomSVG: true,
			inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
			outlineID: 'pswp__icn-download'
		},
		onInit: (el, pswp) => {
			el.setAttribute('download', '');
			el.setAttribute('target', '_blank');
			el.setAttribute('rel', 'noopener');

			pswp.on('change', () => {
				el.href = pswp.currSlide.data.src;
				el.download = pswp.currSlide.data.element.download;
			});
		}
	});
});

lightbox.init();
