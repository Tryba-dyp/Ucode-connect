
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const inputArea = document.getElementById('input-area');
const outputField = document.getElementById('output-field');

addBtn.addEventListener('click', function() {
  const text = inputArea.value.trim();

  if (text === '') {
    alert("It's empty. Try to input something in 'Text input'.");
  } else {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    const notes = getNotesFromCookies();

    notes.push({ text: text, date: currentDate });
    setNotesToCookies(notes, expirationDate);
    updateNotesArchive();
    inputArea.value = '';
  }
});

clearBtn.addEventListener('click', function() {
  const confirmation = confirm('Are you sure?');

  if (confirmation) {
    clearNotesCookies();
    updateNotesArchive();
  }
});

function getNotesFromCookies() {
  const notesCookie = getCookie('notes');

  if (notesCookie) {
    return JSON.parse(notesCookie);
  } else {
    return [];
  }
}

function setNotesToCookies(notes, expirationDate) {
  const notesJson = JSON.stringify(notes);
  document.cookie = `notes=${notesJson}; expires=${expirationDate.toUTCString()}`;
}

function clearNotesCookies() {
  document.cookie = 'notes=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
}

function updateNotesArchive() {
  const notes = getNotesFromCookies();

  if (notes.length === 0) {
    outputField.textContent = '[Empty]';
  } else {
    outputField.textContent = '';
    notes.forEach(function(note) {
      const noteText = `--> ${note.text}`;
      const noteElement = document.createElement('p');
      noteElement.textContent = noteText;
      outputField.appendChild(noteElement);
    });
  }
}

function getCookie(name) {
  const cookieParts = document.cookie.split(';');

  for (let i = 0; i < cookieParts.length; i++) {
    const cookiePair = cookieParts[i].split('=');
    const cookieName = cookiePair[0].trim();
    if (cookieName === name) {
      return cookiePair[1];
    }
  }
  return null;
}

updateNotesArchive();
