/* Tab Icon */

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.querySelector('link[rel="icon"]').href = './tabicon-light.png';
}
