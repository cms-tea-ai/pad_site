const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.integration-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    cards.forEach((card) => {
      const isMatch = category === 'all' || card.dataset.category === category;
      card.style.display = isMatch ? 'block' : 'none';
    });
  });
});
