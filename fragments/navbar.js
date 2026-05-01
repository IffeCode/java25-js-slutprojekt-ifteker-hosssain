const navbar = document.getElementById("navbar");

if(navbar){

    const base = window.location.pathname.includes("/html/") ? "../" : "./";

navbar.innerHTML = `
    <div class="nav-container">
        <h2 class="logo">MovieLizt</h2>

        <ul class="nav-list">
            <li><a href="${base}index.html">Home</a></li>
            <li><a href="${base}html/movies.html">Movies</a></li>
            <li><a href="${base}html/actors.html">Actors</a></li>
            <li><a href="#">...</a></li>
        </ul>
    </div>
`;
}