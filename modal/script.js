/* Modal */

function disableScroll() {
  document.body.style.marginRight = window.innerWidth - document.documentElement.clientWidth + 'px';
  document.body.classList.add('disableScroll');
}

function enableScroll() {
  document.body.style.marginRight = 0;
  document.body.classList.remove('disableScroll');
}

function openModal(modalBg) {
  modalBg.style.display = 'block';
  modalBg.getElementsByClassName('modal')[0].scrollTop = 0;
  disableScroll();
  modalBg.classList.remove('out');
}

function closeModal(modalBg) {
  if (!modalBg.classList.contains('out')) {
    modalBg.classList.add('out');
    modalBg.addEventListener(
      'transitionend',
      function () {
        modalBg.style.display = 'none';
        enableScroll();
      },
      { once: true }
    );
  }
}

const modalBgs = document.getElementsByClassName('modalBg');
for (let i = 0; i < modalBgs.length; i++) {
  modalBgs[i].addEventListener('click', function (e) {
    if (!modalBgs[i].getElementsByClassName('modal')[0].contains(e.target)) {
      closeModal(modalBgs[i]);
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modalBgs = document.getElementsByClassName('modalBg');
    for (let i = 0; i < modalBgs.length; i++) {
      closeModal(modalBgs[i]);
    }
  }
});
