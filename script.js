const navLinks = document.querySelectorAll('.nav-pill');
const revealItems = document.querySelectorAll('.reveal');
const yearNode = document.getElementById('year');
const avatarShell = document.querySelector('.avatar-shell');
const avatarImage = document.querySelector('.avatar-image');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

if (avatarImage && avatarShell) {
  avatarImage.addEventListener('error', () => {
    avatarShell.classList.add('has-fallback');
  });
}
