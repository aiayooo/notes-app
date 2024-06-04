import './components/index.js';
import notesData from './data/notes.js';

const noteItem = document.querySelector('note-item');
noteItem.note = notesData;

document.querySelector('input-note').addEventListener('note-added', (event) => {
  notesData.push(event.detail);
  
  const noteItem = document.querySelector('note-item');
  noteItem.note = notesData;
});