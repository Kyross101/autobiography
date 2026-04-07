// ===================== PAGE NAVIGATION =====================
const pages = [
  'title',
  'introduction',
  'childhood',
  'education',
  'family',
  'challenges',
  'achievements',
  'growth',
  'present',
  'future',
  'conclusion'
];

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show the target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Attach nav button events (called after DOM is ready)
function attachNavEvents() {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(btn.getAttribute('data-page'));
    });
  });
}

// ===================== TITLE PAGE STARS =====================
function generateStars() {
  const titlePage = document.getElementById('page-title');
  if (!titlePage) return;
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    titlePage.appendChild(star);
  }
}

// ===================== BACKGROUND MUSIC =====================
const audio = document.getElementById('bg-music');

function setupMusic() {
  if (!audio) return;

  // Try autoplay; browsers may block it until interaction
  audio.play().catch(() => {
    // Will play on first user interaction
    document.addEventListener('click', () => {
      audio.play().catch(() => {});
    }, { once: true });
  });
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  attachNavEvents();
  setupMusic();
  showPage('title'); // Start on title page
});
