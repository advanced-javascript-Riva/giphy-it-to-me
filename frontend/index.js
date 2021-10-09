// Get Gifs and display in image tags
const getGifs = async (term) => {
  try {
    if (!term) {
      term = document.getElementById('search-bar').value;
    }
    const result = await axios.get(`http://localhost:3000/gifs/${term}`);
    showResults(result);
  } catch (err) {
    console.error(err);
  }
}
// Initial gifs on load
getGifs('plants');

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

const getRandomGifs = async () => {
  try {
    const result = await axios.get(`http://localhost:3000/gifs/random`);
    showResults(result);
  } catch (err) {
    console.log(err)
  }
}

// Todo: created showTags() and show tags to user now
// Todo: create accordian and table for funzies/practice for interview

const getGifsByTag = async (term) => {
  try {
    term = 'pizza';
    const gifs = await axios.get(`http://localhost:3000/tags/related/${term}`);
    console.log('gif data with tags', gifs.data);
  } catch (err) {
    console.error(err);
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


  



