(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');

        item.style.backgroundImage = `url(${item.dataset.src})`;
        item.dataset.background = item.dataset.src;
        return;
          
      };
    });
  })();