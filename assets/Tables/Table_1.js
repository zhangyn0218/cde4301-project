new gridjs.Grid({
  columns: ["Sample", "Features", "WER"],
  data: [
    ["A", "Provided Datasets", "34.5%"],
    ["B", "Relatively Noisy Environment", "45.1%"],
    ["C", "Quiet Conditions", "32.2%"],
  ],
}).render(document.getElementById("table-1"));

new gridjs.Grid({
  columns: ["Intended Phrase", "Recognized Output", "Impact"],
  data: [
    ["LNAV not engaged", "Dial Neff not engaged", "Alters meaning of navigation mode error"],
    ["Direct to AB18R", "Direct to a bit money right", "Corrupts runway identifier"],
    ["Wrong runway", "Run runway", "Prevents triggering of the 'Wrong Runway' event"],
  ],
}).render(document.getElementById("table-2"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
