/* Inputs */

const tabicon = document.querySelector('link[rel="icon"]');
window
  .matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', function(event) {
    if (event.matches) {
      tabicon.href = './tabicon-light.png';
    } else {
      tabicon.href = './tabicon.png';
    }
  });
