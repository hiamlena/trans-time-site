(function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const current = document.body?.dataset?.page;
  if (current) {
    navLinks.forEach((link) => {
      if (link.dataset.page === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.showToast = function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`.trim();
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
      if (!container.children.length) {
        container.remove();
      }
    }, 5200);
  };

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      contactForm.reset();
      window.showToast('Мы получили сообщение и скоро ответим.', 'success');
    });
  }
})();
