// Renders project cards from data/projects.js
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('project-grid');
  if (grid && typeof projects !== 'undefined') {
    projects.forEach(p => {
      const card = document.createElement('a');
      card.href = p.link;
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <span class="learn-more">Learn more &rarr;</span>
      `;
      grid.appendChild(card);
    });
  }

  // Timeline dot click/hover to reveal detail box
  document.querySelectorAll('.timeline-item').forEach(item => {
    const dot = item.querySelector('.timeline-dot');
    const box = item.querySelector('.timeline-detail-box');
    if (!dot || !box) return;

    const toggle = () => {
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.timeline-item.active').forEach(el => el.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    };

    dot.addEventListener('click', (e) => {
      e.preventDefault();
      toggle();
    });
  });

  // Close detail box when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.timeline-item')) {
      document.querySelectorAll('.timeline-item.active').forEach(el => el.classList.remove('active'));
    }
  });
});
