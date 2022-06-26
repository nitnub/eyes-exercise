const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (offset) =>
    (event.clientX * 100) / window.innerWidth + offset + '%';
  const y = (offset) =>
    (event.clientY * 100 + offset) / window.innerHeight + offset + '%';

  // Left side
  balls[0].style.left = x(+17);
  balls[0].style.top = y(0);
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';

  // Right side
  balls[1].style.left = x(-17);
  balls[1].style.top = y(0);
  balls[1].transform = 'translate(-' + x + ',-' + y + ')';
};
