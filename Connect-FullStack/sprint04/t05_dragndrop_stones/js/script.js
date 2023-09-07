 
const stones = document.querySelectorAll('.stone');

stones.forEach(stone => {
  stone.addEventListener('click', toggleDraggable);
  stone.addEventListener('mousedown', startDragging);
  stone.addEventListener('mouseup', stopDragging);
});

function toggleDraggable(event) {
  const stone = event.target;
  stone.classList.toggle('draggable');
}

let isDragging = false;

function startDragging(event) {
  const stone = event.target;
  
  if (stone.classList.contains('draggable')) {
    isDragging = true;
    stone.classList.add('dragging');
  }
}

function stopDragging(event) {
  const stone = event.target;
  isDragging = false;
  stone.classList.remove('dragging');
}

document.addEventListener('mousemove', moveStone);

function moveStone(event) {
  if (isDragging) {
    const stone = document.querySelector('.dragging');
    stone.style.left = `${event.clientX - stone.offsetWidth / 2}px`;
    stone.style.top = `${event.clientY - stone.offsetHeight / 2}px`;
  }
}
