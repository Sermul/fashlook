document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.getElementById('scrolling-links');
  const bullets = document.querySelectorAll('#bulatans .w-4');

  // Update posisi bullet berdasarkan scroll
  linksContainer.addEventListener('scroll', () => {
    const totalWidth = linksContainer.scrollWidth - linksContainer.clientWidth;
    const scrollPosition = linksContainer.scrollLeft;
    const bulletIndex = Math.round((scrollPosition / totalWidth) * (bullets.length - 1));

    // Set opacity berdasarkan posisi scroll
    bullets.forEach((bullet, index) => {
      if (index === bulletIndex) {
        bullet.classList.add('opacity-100');
        bullet.classList.remove('opacity-40');
      } else {
        bullet.classList.add('opacity-40');
        bullet.classList.remove('opacity-100');
      }
    });
  });

  // === BURGER MENU FUNCTION ===
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
