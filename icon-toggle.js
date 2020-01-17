import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
    static get template() {
        return html `
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: rgba(0,0,0,0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: currentcolor;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
    }

    static get properties() {
        return {
            toggleIcon: {
                type: String
            },
            pressed: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true


            }
        };
    }
    constructor() {
        super();
        this.addEventListener('click', this.toggleAttribute.bind(this));
    }

    toggle() {
        this.is
    }
}

customElements.define('icon-toggle', IconToggle);