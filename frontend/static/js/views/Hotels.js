import View from "../abstraction/View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Hotels");
    }

    async getHtml() {
        return `<h1>Welcome!</h1>
        <p> This is Hotels View.</p>
        <p>
            <a href="/hotels" class="nav__link" data-link>Hotels</a>
        </p>
        `;
    }
}

