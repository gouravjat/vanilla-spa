import View from "../abstraction/View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Employees");
    }

    async getHtml() {
        return `<h1>Welcome!</h1>
        <p>Hello there this is Employees View</p>
        <p>
            <a href="/employees" class="nav__link" data-link>Employees</a>
        </p>
        `;
    }
}

