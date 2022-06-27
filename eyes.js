const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  // adjust eye movement by given offset.
  const x = (offset) => {
    const offsetAbs = Math.abs(offset);
    const adjustment = (event.clientX * 100) / window.innerWidth + offset;
    // limit leftward eye movement
    if (adjustment < offsetAbs) {
      return `${offsetAbs}%`;
    }
    // limit rightward eye movement
    if (adjustment > 100 - offsetAbs) {
      return `${100 - offsetAbs}%`;
    }

    return `${(event.clientX * 100) / window.innerWidth + offset}%`;
  };

  const y = (offset) =>
    `${(event.clientY * 100 + offset) / window.innerHeight + offset}%`;

  // Left side
  balls[0].style.left = x(+17);
  balls[0].style.top = y(0);
  balls[0].transform = `translate(${-x}, ${-y})`;

  // Right side
  balls[1].style.left = x(-17);
  balls[1].style.top = y(0);
  balls[1].transform = `translate(${-x}, ${-y})`;
};
