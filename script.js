// Cookie helper functions for persistence
function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value, days = 365) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
}

// Initialize state
const cookieBtn = document.getElementById('cookieBtn');
const cookieArea = document.getElementById('cookieArea');
const counterDisplay = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

// Retrieve saved count from cookie (fallback to localStorage if cookie is unavailable or on file://)
function loadCount() {
  const cookieVal = getCookie('cookieClicks');
  if (cookieVal !== null) {
    const parsed = parseInt(cookieVal, 10);
    if (!isNaN(parsed)) return parsed;
  }
  const storageVal = localStorage.getItem('cookieClicks');
  if (storageVal !== null) {
    const parsed = parseInt(storageVal, 10);
    if (!isNaN(parsed)) return parsed;
  }
  return 0;
}

function saveCount(val) {
  setCookie('cookieClicks', val.toString(), 365);
  try {
    localStorage.setItem('cookieClicks', val.toString());
  } catch (e) {
    // Ignore storage quota/permission issues if any
  }
}

let count = loadCount();

function updateDisplay() {
  counterDisplay.textContent = count.toLocaleString();
}

function createParticle(x, y) {
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.textContent = '+1';

  // Position relative to cookieArea
  const rect = cookieArea.getBoundingClientRect();
  const posX = x !== undefined ? x - rect.left : rect.width / 2;
  const posY = y !== undefined ? y - rect.top : rect.height / 2;

  // Slight random horizontal variation
  const randomOffset = (Math.random() - 0.5) * 30;
  particle.style.left = `${posX + randomOffset}px`;
  particle.style.top = `${posY}px`;

  cookieArea.appendChild(particle);

  particle.addEventListener('animationend', () => {
    particle.remove();
  });
}

function triggerClick(e) {
  count += 1;
  saveCount(count);
  updateDisplay();

  // Bump animation on counter
  counterDisplay.classList.remove('bump');
  void counterDisplay.offsetWidth; // Force reflow
  counterDisplay.classList.add('bump');

  // Click animation on button
  cookieBtn.classList.add('clicked');
  setTimeout(() => cookieBtn.classList.remove('clicked'), 100);

  // Create floating +1 particle
  if (e && e.clientX && e.clientY) {
    createParticle(e.clientX, e.clientY);
  } else {
    createParticle();
  }
}

cookieBtn.addEventListener('click', (e) => {
  triggerClick(e);
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  count = 0;
  saveCount(0);
  updateDisplay();
});

// Initial display load
updateDisplay();
