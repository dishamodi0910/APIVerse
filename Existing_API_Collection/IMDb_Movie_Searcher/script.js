// Function to perform movie search
function searchMovie() {
  $("#movie-list").html(""); // Clear previous search results
  $.ajax({
    url: "https://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "166b57cd", // Replace with your own API key
      s: $("#search-input").val(), // Get search input value
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        // Loop through each movie and display card
        $.each(movies, function (i, movie) {
          $("#movie-list").append(`
            <div class="col-md-4">
              <div class="card mb-3">
                <img src="${movie.Poster}" class="card-img-top img-fluid" alt="Poster of ${movie.Title}">
                <div class="card-body">
                  <h5 class="card-title">${movie.Title}<span class="text-muted">&nbsp;(${movie.Year})</span></h5>
                  <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${movie.imdbID}">See details</a>
                </div>
              </div>
            </div>
          `);
        });

        $("#search-input").val(""); // Clear search input after displaying results
      } else {
        $("#movie-list").html(`
          <div class="col">
            <h1 class="text-center">${result.Error}</h1>
          </div>
        `);
      }
    },
    error: function (xhr, status, error) {
      console.error("API Error:", error); // Log error to console
      $("#movie-list").html(`
        <div class="col">
          <h1 class="text-center">Failed to fetch movies. Please try again later.</h1>
        </div>
      `);
    },
  });
}

// Trigger search on button click
$("#search-button").on("click", function () {
  searchMovie();
});

// Trigger search on pressing Enter key
$("#search-input").on("keyup", function (e) {
  if (e.which === 13) {
    searchMovie();
  }
});

// Handle click on 'See details' link in movie card
$("#movie-list").on("click", ".see-detail", function () {
  $.ajax({
    url: "https://omdbapi.com",
    dataType: "json",
    type: "get",
    data: {
      apikey: "166b57cd", // Replace with your own API key
      i: $(this).data("id"), // Get movie ID from data attribute
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-title").html(movie.Title); // Set modal title
        $(".modal-body").html(`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="img-fluid">
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item">
                    <p>${movie.Plot}</p>
                  </li>
                  <li class="list-group-item"><b>Released:</b> ${movie.Released}</li>
                  <li class="list-group-item"><b>Genre:</b> ${movie.Genre}</li>
                  <li class="list-group-item"><b>IMDB Rating:</b> ${movie.Ratings[0].Value}</li>
                  <li class="list-group-item"><b>Duration:</b> ${movie.Runtime}</li>
                  <li class="list-group-item"><b>Director:</b> ${movie.Director}</li>
                  <li class="list-group-item"><b>Actors:</b> ${movie.Actors}</li>
                  <li class="list-group-item"><b>Awards:</b> ${movie.Awards}</li>
                  <li class="list-group-item"><a class="btn btn-primary" href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank">Visit IMDB</a></li>
                </ul>
              </div>
            </div>
          </div>
        `);
      }
    },
    error: function (xhr, status, error) {
      console.error("API Error:", error); // Log error to console
    },
  });
});

// Additional functionality for 'About' link or other actions
$("#about").on("click", function () {
  // Implement if needed
});
