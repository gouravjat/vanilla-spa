import View from "../abstraction/View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `<h1>Welcome Gourav!</h1>
        <p>Hello There this is a Dashboard</p>
        <p>
            <a href="/hotels" class="nav__link" data-link>Hotels</a>
        </p>
        `;
    }
}

