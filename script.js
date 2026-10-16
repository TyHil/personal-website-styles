/* No JS */

document.documentElement.classList.replace('no-js', 'js');

/* Theme */

const extraDarkOverlay = document.getElementById('extra-dark-overlay');
let isExtraDark = false;

function updateTheme() {
  const theme = localStorage.getItem('theme');
  isExtraDark = theme === 'extra-dark';

  document.documentElement.classList.toggle('always-light', theme === 'light');
  document.documentElement.classList.toggle('always-dark', theme === 'dark' || isExtraDark);

  if (extraDarkOverlay) {
    extraDarkOverlay.style.display = isExtraDark ? 'block' : 'none';
  }
}
updateTheme();

document.addEventListener(
  'pointermove',
  event => {
    if (!isExtraDark || !extraDarkOverlay) return;

    extraDarkOverlay.style.setProperty('--mouse-x', event.clientX + 'px');
    extraDarkOverlay.style.setProperty('--mouse-y', event.clientY + 'px');
  },
  { passive: true }
);

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
