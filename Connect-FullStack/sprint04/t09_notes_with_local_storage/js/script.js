
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const inputArea = document.getElementById('input-area');
const outputField = document.getElementById('output-field');

addBtn.addEventListener('click', function() {
  const text = inputArea.value.trim();

  if (text === '') {
    alert("It's empty. Try to input something in 'Text input'.");
  } else {
    const currentDate = new Date().toLocaleString();
    const note = {
      text: text,
      date: currentDate
    };

    const storedNotes = localStorage.getItem('notes');
    const notes = storedNotes ? JSON.parse(storedNotes) : [];

    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes(notes);
    inputArea.value = '';
  }
});

clearBtn.addEventListener('click', function() {
  const confirmation = confirm('Are you sure?');

  if (confirmation) {
      localStorage.removeItem('notes');
      outputField.innerHTML = '[Empty]';
  }
});

const storedNotes = localStorage.getItem('notes');
const notes = storedNotes ? JSON.parse(storedNotes) : [];
displayNotes(notes);

function displayNotes(notes) {
  if (notes.length === 0) {
    outputField.innerHTML = '[Empty]';
  } else {
    outputField.innerHTML = '';
    notes.forEach(function(note) {
      const noteItem = document.createElement('p');
      noteItem.textContent = `--> ${note.text} [${note.date}]`;
      outputField.appendChild(noteItem);
    });
  }
}
