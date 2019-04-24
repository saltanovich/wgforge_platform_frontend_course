const sections = document.querySelectorAll('section');
const turret = document.getElementById('turret');
const tank_2 = document.getElementById('tank_2');

for (let section of sections) {
  section.addEventListener('mouseenter', event => {
    const turretDirection = event.target.dataset.turretDirection;
    turret.classList.add(`tank_turret__${turretDirection}`);
  });
  section.addEventListener('mouseleave', event => {
    const turretDirection = event.target.dataset.turretDirection;
    turret.classList.remove(`tank_turret__${turretDirection}`);
  });
}

sections[0].addEventListener('click', () => {
  document.body.classList.add('toggle');
});

let lastPos = 0;
let lastScrollTop = 0;

sections[0].addEventListener('scroll', () => {
  let currentTop = event.target.scrollTop;

  tank_2.style.transform = `translateX${lastPos}px)`;
});
