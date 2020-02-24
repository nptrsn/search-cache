// Search Button based
let searchButton = document.getElementById("button1");
searchButton.addEventListener("click", initiateSearch);

// term prep for API
function initiateSearch() {
  // API vars
  let apiHost = "movie-database-imdb-alternative.p.rapidapi.com";
  let apiKey = "4d3f38ef84msh7632c413966315ap107936jsnc76b699b8fab";
  let apiPath = 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=';

  let term = document.getElementById("search").value;
  let encodedTerm = encodeURIComponent(term.trim());

  // API Call
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open("GET", `${apiPath}${encodedTerm}`);
  xhr.setRequestHeader("x-rapidapi-key", apiKey);
  xhr.setRequestHeader("x-rapidapi-host", apiHost);
};


// comparison of event listener's term param
// and openCallTerms that are in flight
let openCallTerms = ['a','b','c','d'];


// Cancelling targeted request
function cancelRequest(term){
  newRequest.abort();
}
