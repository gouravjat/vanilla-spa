console.log(location.pathname);
console.log(location.hostname);

const router = async () => {
    const routes = [
        { path: "/", view: ()=>console.log("This is Dashboard.")},
        { path: "/posts", view: ()=>console.log("This is Posts.")},
        { path: "/employees", view: ()=>console.log("This is Employees.")},
    ]

    //Test each case when a route is clicked
    const potentialMatches = routes.map(route=>{
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    console.log(match);
};


document.addEventListener("DOMContentLoaded", ()=>{
    router();
});