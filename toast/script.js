/* Toasts */

function createToast(text, options) {
  const defaults = {
    permanent: false,
    delay: 6000,
    button: false,
    buttonText: '',
    onButtonClick: () => {},
    onClose: () => {},
    htmlText: false
  };
  options = Object.assign({}, defaults, options);

  const div = document.createElement('div');
  div.classList.add('toast');

  function close() {
    if (document.body.contains(div)) {
      div.classList.add('animateout');
      options.onClose();
      div.addEventListener('animationend', function () {
        div.remove();
      });
    }
  }

  const x = document.createElement('button');
  x.classList.add('close');
  x.innerHTML = '&times;';
  x.addEventListener('click', close);
  div.appendChild(x);

  if (options.htmlText) {
    div.appendChild(text);
  } else {
    const p = document.createElement('p');
    p.innerText = text;
    div.appendChild(p);
  }

  if (options.button) {
    const undo = document.createElement('button');
    undo.innerText = options.buttonText;
    undo.addEventListener('click', function () {
      options.onButtonClick();
      div.classList.add('animateout');
      div.addEventListener('animationend', function () {
        div.remove();
      });
    });
    div.appendChild(undo);
  }

  if (!options.permanent) {
    let timer = setTimeout(close, options.delay);
    div.addEventListener('mouseover', function () {
      clearTimeout(timer);
    });
    div.addEventListener('mouseout', function () {
      timer = setTimeout(close, options.delay);
    });
  }

  document.getElementById('toasts').appendChild(div);
  div.classList.add('animatein');
  return close;
}
