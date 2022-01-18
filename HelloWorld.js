//imports dependecies
import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  //add styles
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  //makes the title and counter
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  //sets the counter and the title
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  //adds one to the counter
  //is called by the button
  __increment() {
    this.counter += 1;
  }

  render() {
    //returns a working title with a button
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
