/* No JS */

document.documentElement.classList.replace('no-js', 'js');

/* Theme */

let isExtraDark = localStorage.getItem('theme') === 'extra-dark';
function updateTheme() {
  const theme = localStorage.getItem('theme');
  const extraDarkOverlay = document.getElementById('extra-dark-overlay');
  if (theme === 'light') {
    document.documentElement.classList.remove('always-dark');
    document.documentElement.classList.add('always-light');
    if (extraDarkOverlay) extraDarkOverlay.style.display = 'none';
    isExtraDark = false;
  } else if (theme === 'dark') {
    document.documentElement.classList.remove('always-light');
    document.documentElement.classList.add('always-dark');
    if (extraDarkOverlay) extraDarkOverlay.style.display = 'none';
    isExtraDark = false;
  } else if (theme === 'extra-dark') {
    document.documentElement.classList.remove('always-light');
    document.documentElement.classList.add('always-dark');
    if (extraDarkOverlay) extraDarkOverlay.style.display = 'block';
    isExtraDark = true;
  } else {
    document.documentElement.classList.remove('always-light');
    document.documentElement.classList.remove('always-dark');
    if (extraDarkOverlay) extraDarkOverlay.style.display = 'none';
    isExtraDark = false;
  }
}
updateTheme();

document.addEventListener('mousemove', function (event) {
  if (!isExtraDark) return;

  const extraDarkOverlay = document.getElementById('extra-dark-overlay');
  if (!extraDarkOverlay) return;

  extraDarkOverlay.style.setProperty('--mouse-x', event.clientX + 'px');
  extraDarkOverlay.style.setProperty('--mouse-y', event.clientY + 'px');
});

/* Google Analytics */

const firebaseConfig = {
  apiKey: 'AIzaSyBqUCCFOsGpHaYAMk7Lgpp1PeWC34lCS4s',
  authDomain: 'tylergordonhill-c8339.firebaseapp.com',
  databaseURL: 'https://tylergordonhill-c8339-default-rtdb.firebaseio.com',
  projectId: 'tylergordonhill-c8339',
  storageBucket: 'tylergordonhill-c8339.appspot.com',
  messagingSenderId: '10243950475',
  appId: '1:10243950475:web:ff9abba5961c2fc49c918e',
  measurementId: 'G-XRHEPKCZGL'
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
