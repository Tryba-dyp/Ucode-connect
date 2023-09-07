
const liArr = document.getElementsByTagName('li');

for (let i = 0; i < liArr.length; i++) {
  if (!liArr[i].hasAttribute('class')) {
    liArr[i].setAttribute('class', 'unknown');
  } else {
    const classValue = liArr[i].getAttribute('class');
    
    if (classValue !== 'good' && classValue !== 'evil') {
      liArr[i].setAttribute('class', 'unknown');
    }
  }

  if (!liArr[i].hasAttribute('data-element')) {
    liArr[i].setAttribute('data-element', 'none');
  }

  const elementsDiv = document.createElement('div');
  const elementsData = String(liArr[i].getAttribute('data-element')).trim().split(' ');

  elementsData.forEach((element) => {
    const circle = document.createElement('div');
    circle.classList.add('elem', element);
    elementsDiv.appendChild(circle);

    if ((element === 'none')) {
      const line = document.createElement('div');
      line.classList.add('line');
      circle.appendChild(line);
    }
  });

  liArr[i].appendChild(elementsDiv);
}
