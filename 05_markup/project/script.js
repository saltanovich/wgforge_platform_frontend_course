const sections = document.querySelectorAll('section');
const turret = document.getElementById('turret');
const tankScrolled = document.getElementById('tank_2');

for (const [index, section] of sections.entries()) {
  // Turret rotation
  section.addEventListener('mouseenter', event => {
    const turretDirection = event.target.dataset.turretDirection;
    turret.classList.add(`tank_turret__${turretDirection}`);
  });
  section.addEventListener('mouseleave', event => {
    const turretDirection = event.target.dataset.turretDirection;
    turret.classList.remove(`tank_turret__${turretDirection}`);
  });

  // Section navigation
  sections[index].addEventListener('click', () => {
    document.body.classList.add('toggle', `toggle__${index}`);
  });
}

// Tank on scroll
sections[0].addEventListener('scroll', event => {
  let tankSpeed = event.target.scrollTop;

  tankScrolled.style.transform = `translateX(${tankSpeed}px)`;
});
