class CustomCard extends HTMLElement {
    constructor() {
      super();
      // Attach shadow DOM for encapsulation
      this.attachShadow({ mode: 'open' });
  
      // Add HTML content for the card layout
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 300px;
            background-color: var(--card-bg-color, white);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .card-header {
            background-color: var(--header-bg-color, #f4f4f4);
            padding: 10px;
            font-size: 1.2rem;
            font-weight: bold;
          }
          .card-content {
            padding: 15px;
            font-size: 1rem;
            color: var(--content-text-color, #333);
          }
          .card-footer {
            background-color: var(--footer-bg-color, #f4f4f4);
            padding: 10px;
            text-align: center;
          }
        </style>
  
        <div class="card-header">
          <slot name="header">Default Header</slot>
        </div>
        <div class="card-content">
          <slot name="content">Default Content</slot>
        </div>
        <div class="card-footer">
          <slot name="footer">Default Footer</slot>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('custom-card', CustomCard);
  