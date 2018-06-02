function renderMovieProp(content) {
    var td = document.createElement("td");
    td.textContent = content;
    return td;
}

function renderMovie(movie) {
    var tr = document.createElement("tr");

    tr.appendChild(renderMovieProp(movie.title));
    tr.appendChild(renderMovieProp(movie.type));
    tr.appendChild(renderMovieProp(movie.date));
    tr.appendChild(renderMovieProp(movie.rating));

    return tr;
}


function renderMovies(moviesArray) {
    var tbody = document.querySelector("tbody");
    
    tbody.textContent = "";

    for (var idx = 0; idx < moviesArray.length; idx++) {
        var movie = moviesArray[idx];
        
        tbody.appendChild(renderMovie(movie))
    }

}

movies.sort(function(record1, record2) {
    return record2.rating - record1.rating;

});

var searchInput = document.getElementById("movie-filter");
searchInput.addEventListener("input", function() {
    var movies_filtered = movies.filter(function(el) {
        return el.title.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1;
    });
    renderMovies(movies_filtered);
});
var searchInput = document.getElementById("movie-filter");
searchInput.addEventListener("input", function() {
    var movies_filtered = movies.filter(function(el) {
        return el.title.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1;
    });
    renderMovies(movies_filtered);
});

renderMovies(movies);


var trailer = document.getElementById("trailer");
trailer.addEventListener("click", function() {
    modal.style.display = "block";
}
)

