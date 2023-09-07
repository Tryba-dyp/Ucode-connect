
document.addEventListener('DOMContentLoaded', function() {
  const table = document.createElement('table');
  table.id = 'heroesTable';
  const thead = document.createElement('thead');
  const theadRow = document.createElement('tr');
  const headers = ['Name', 'Strength', 'Age'];

  headers.forEach((header, index) => {
    const theadCol = document.createElement('th');
    theadCol.textContent = header;

    theadCol.addEventListener('click', function() {
      sortTable(index);
    });

    theadRow.appendChild(theadCol);
  });

  thead.appendChild(theadRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  const heroes = [
    { name: 'Black Panther', strength: 66, age: 53},
    { name: 'Captain America', strength: 79, age: 137},
    { name: 'Captain Marvel', strength: 97, age: 26},
    { name: 'Hulk', strength: 80, age: 49},
    { name: 'Iron Man', strength: 88, age: 48},
    { name: 'Spider-Man', strength: 78, age: 16},
    { name: 'Thanos', strength: 99, age: 1000},
    { name: 'Thor', strength: 95, age: 1000},
    { name: 'Yon-Rogg', strength: 73, age: 52}
  ];

  heroes.forEach((hero, index) => {
    const tbodyRow = document.createElement('tr');
    const heroName = document.createElement('td');
    const heroStrength = document.createElement('td');
    const heroAge = document.createElement('td');

    heroName.textContent = `${hero.name}`;
    heroStrength.textContent = `${hero.strength}`;
    heroAge.textContent = `${hero.age}`;

    tbodyRow.appendChild(heroName);
    tbodyRow.appendChild(heroStrength);
    tbodyRow.appendChild(heroAge);

    tbody.appendChild(tbodyRow);
  });

  table.appendChild(tbody);

  const placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = '';
  placeholder.appendChild(table);
});

function sortTable(sortedColumnIndex) {
  const table = document.getElementById('heroesTable');
  const thead = table.querySelector('thead');
  const sortedCol = thead.getElementsByTagName('th')[sortedColumnIndex];
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.getElementsByTagName('tr'));

  rows.sort((firstRow, secondRow) => {
    const firstValue = firstRow.getElementsByTagName('td')[sortedColumnIndex].textContent;
    const secondValue = secondRow.getElementsByTagName('td')[sortedColumnIndex].textContent;

    if (sortedColumnIndex === 1 || sortedColumnIndex === 2) {
      return firstValue - secondValue;
    }

    if (firstValue > secondValue) {
      return 1;
    }

    if (firstValue < secondValue) {
      return -1;
    }

    return 0;
  });

  if (sortedCol.getAttribute('sort-order') === 'ACS') {
    sortedCol.setAttribute('sort-order', 'DESC');
    rows.reverse();
  } else {
    sortedCol.setAttribute('sort-order', 'ACS');
  }

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  rows.forEach((row) => {
    tbody.appendChild(row);
  });

  const sortOrder = sortedCol.getAttribute('sort-order');
  const notification = document.getElementById('notification');
  notification.textContent = `Sorting by ${table.rows[0].cells[sortedColumnIndex].textContent}, order: ${sortOrder}`
}
