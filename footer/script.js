/* Theme */

document.getElementById('footer-theme').addEventListener('click', () => {
  const theme = localStorage.getItem('theme');
  if (theme !== null) {
    document.getElementById('theme-' + theme).checked = true;
  } else {
    document.getElementById('theme-system').checked = true;
  }
  openModal(document.getElementById('theme-modal'));
});

const themeRadios = document.querySelectorAll('input[name="theme"]');

themeRadios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    let valueName = document.querySelector('input[name="theme"]:checked').value;
    localStorage.setItem('theme', valueName);
    updateTheme();
  })
});
