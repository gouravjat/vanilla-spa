import Dashboard from "./views/Dashboard.js";
import Hotels from "./views/Hotels.js";
import Employees from "./views/Employees.js";


const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: "/", view: Dashboard },
		{ path: "/hotels", view: Hotels },
		{ path: "/employees", view: Employees },
	];

	//Test each case when a route is clicked
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}
	console.log(match);
	const view = new match.route.view();

	document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", (e) => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
	router();
});
