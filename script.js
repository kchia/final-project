/* CHALLENGE */
// When the user submits the search form, prevent the page from reloading and make an API request to Giphy's search endpoint.
// Display all the results in the #giphy-results div
// Each new search should replace the previous search results

const searchForm = document.querySelector("#search-form");

// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout
async function handleGiphySearchSubmit(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Make a fetch call to the api endpoint
  const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f";
  const searchTerm = document.getElementById("search-term").value; // get the user's search term
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
  );

  // When a response comes back from the API, parse the response and append the results to the giphy-results div
  const giphyResultsDiv = document.getElementById("giphy-results");
  const giphyData = await response.json();

  // The gifs are stored in an array at giphyData.data, so we have to iterate through that
  for (let i = 0; i < giphyData.data.length; i++) {
    // Store the gif object in a gif variable
    const gif = giphyData.data[i];

    // Grab the url from each gif
    const url = gif.images.fixed_width.url;

    // Create a new img tag for each gif
    const image = document.createElement("img");

    // Set the url of your image src attribute
    image.setAttribute("src", url);

    // Append the image to the div
    giphyResultsDiv.appendChild(image);
  }
}

searchForm.addEventListener("submit", handleGiphySearchSubmit);
