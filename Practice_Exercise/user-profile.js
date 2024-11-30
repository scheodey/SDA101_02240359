class UserProfile extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Template with basic styling
        shadow.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    max-width: 300px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                }
                h2 {
                    margin: 0;
                    font-size: 1.5em;
                    color: #333;
                }
                p {
                    margin: 5px 0;
                    color: #777;
                }
            </style>
            <div class="card">
                <h2 id="user-name"></h2>
                <p id="user-role"></p>
            </div>
        `;
    }

    static get observedAttributes() {
        return ['name', 'role'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.shadowRoot.getElementById('user-name').textContent = newValue;
        } else if (name === 'role') {
            this.shadowRoot.getElementById('user-role').textContent = newValue;
        }
    }

    connectedCallback() {
        this.shadowRoot.getElementById('user-name').textContent = this.getAttribute('name');
        this.shadowRoot.getElementById('user-role').textContent = this.getAttribute('role');
    }
}

// Define the custom element
customElements.define('user-profile', UserProfile);
