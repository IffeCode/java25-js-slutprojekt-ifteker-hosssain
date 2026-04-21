const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <div class="nav-container">
        <h2 class="logo">MovieLizt</h2>

        <ul class="nav-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Actors</a></li>
            <li><a href="#">...</a></li>
        </ul>
    </div>
`