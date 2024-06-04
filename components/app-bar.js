class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      div {
        padding: 24px 20px;
        color: white;
        background-color: rgb(117, 106, 182);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
      }

      .app-name {
        margin: 0;
        font-size: 1.7rem;
        text-align: center;
      }

      @media screen and (max-width: 768px) {
        div {
          width: 100%;
        }
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div>
      <h1 class="app-name">NOTES APP</h1>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);