// Last.fm variables
const apiKey = "c45fbeb0d318aac9d7698d798b639811"; // Replace with your Last.fm API key
const username = "coopersmith"; // Replace with your Last.fm username

// API Endpoint to get top artists from Last.fm
const lastFmApiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&period=3month&limit=5`;

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

