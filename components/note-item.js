import notesData from "../data/notes.js";

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._style = document.createElement('style');
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      .container {
        padding: 4%;
      }

      .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 3%;
        margin-top: 2rem;
        justify-items: center;
        justify-content: center;
      }

      .card-note {
        display: block;
        background: rgb(240, 237, 255);
        border-radius: 8px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
        width: 300px;
        padding: 20px;
      }
      
      .note-info {
        padding: 20px;
        border: 2px solid rgb(117, 106, 182);
        border-radius: 8px;
        height: 200px;
      }
      
      .note-title h2 {
        font-weight: bold;
      }
      
      .note-description {
        margin-top: 10px;
      }

      .note-date {
        margin-top: 2rem;
      }

      @media screen and (max-width: 768px) {
        .list {
          justify-items: center;
          justify-content: center;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
 
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="container">
        <div class="list">
        ${notesData.map(note => `
          <div class="card-note">
            <div class="note-info">
              <div class="note-title">
                <h2>${note.title}</h2>
              </div>
              <div class="note-description">
                <p>${note.body}</p>
              </div>
              <div class="note-date">
                <p>${new Date(note.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    `;
  }
 }

 customElements.define('note-item', NoteItem);

