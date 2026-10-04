/* Ripples */

const circs = document.getElementsByClassName('ripple');
for (let i = 0; i < circs.length; i++) {
  circs[i].addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;
    ripple.style.width = ripple.style.height = diameter + 'px';
    ripple.style.left = e.offsetX - radius + 'px';
    ripple.style.top = e.offsetY - radius + 'px';
    ripple.classList.add('ripplecircle');
    this.append(ripple);
    ripple.addEventListener(
      'animationend',
      function () {
        this.remove();
      },
      { once: true }
    );
  });
}
