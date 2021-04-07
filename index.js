// Get Gifs and display in image tags
const getGifs = async () => {
  try{
    const searchBar = document.getElementById('search-bar').value;
    const result = await axios.get(`http://localhost:3000/gifs/${searchBar}`);
    showResults(result);
  } catch (err) {
    console.log(err);
  }
}

const showResults = result => {
  const container = document.getElementById('gif-container');
  // Clears old search results
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const children = result.data.data.forEach(gif => {
    const child = document.createElement('img');
    child.className='gif-image';
    child.src = gif.images.downsized.url;
    container.append(child);
  });
}

const getTrendingGifs = async () => {
  try {
    const result = await axios.get(`http://localhost:3000/gifs/trending`);
    showResults(result);
  } catch (err) {
    console.log(err)
  }
}

// Triggering an event on Enter key pressed to show search results
const enterKeyPressed = document.getElementById('search-bar')
.addEventListener('keyup', e => {
  e.preventDefault();
 if (e.code === 'Enter') {
   document.getElementById('search-button').click();
 }
});


  



