// Last.fm variables
const apiKey = "c45fbeb0d318aac9d7698d798b639811"; // Replace with your Last.fm API key
const username = "coopersmith"; // Replace with your Last.fm username

// API Endpoint to get top artists from Last.fm
const lastFmApiUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&period=3month&limit=5`;

// Fetch most recent artists from Last.fm
fetch(lastFmApiUrl)
  .then(response => response.json())
  .then(data => {
    const artistData = data.topartists.artist;
    const artistNames = artistData.map(artist => artist.name);

    // Create a comma-separated string of artist names
    const commaSeparatedArtists = artistNames.join(", ");

    // Locate the list item and populate it
    const listItem = document.getElementById("listening-to-item");
    listItem.textContent = `Recently listening to a lot of ${commaSeparatedArtists}`;
  })
  .catch(error => console.error("Error fetching data from Last.fm: ", error));

// Readwise variables
const readwiseToken = '0GncVQqKSLkt1txFBbqupFvnTR4SgaiEfXVbebq5xbSw1qzK60'; // Replace with your Readwise API Token

// Fetch most recent books from Readwise
fetch('https://api.readwise.io/v2/books/', {
  method: 'GET',
  headers: {
    'Authorization': `Token ${readwiseToken}`,
  }
})
.then(response => {
  if (response.status !== 200) {
    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
    return;
  }
  return response.json();
})
.then(data => {
  console.log('Data from Readwise:', data);
  // ...your code to update the page
})
.catch(err => {
  console.log('Fetch Error:', err);
});