class ToggleButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Load initial state or default to OFF (false)
        this.state = JSON.parse(localStorage.getItem('toggle-button-state')) || false;

        // Set up the button with styles
        shadow.innerHTML = `
            <style>
                button {
                    background-color: ${this.state ? 'green' : 'red'};
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    font-size: 16px;
                    border-radius: 5px;
                }
            </style>
            <button>${this.state ? 'ON' : 'OFF'}</button>
        `;

        // Reference to the button
        this.button = shadow.querySelector('button');

        // Add click event listener
        this.button.addEventListener('click', () => {
            this.state = !this.state; // Toggle state
            localStorage.setItem('toggle-button-state', JSON.stringify(this.state)); // Save state
            this.button.style.backgroundColor = this.state ? 'green' : 'red'; // Update button color
            this.button.textContent = this.state ? 'ON' : 'OFF'; // Update button text
            
            // Dispatch the custom event
            this.dispatchEvent(new CustomEvent('toggle-changed', {
                detail: { state: this.state },
                bubbles: true,
                composed: true
            }));
        });
    }
}

// Define the custom element
customElements.define('toggle-button', ToggleButton);
