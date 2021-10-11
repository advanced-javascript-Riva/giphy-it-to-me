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
    console.error(err);
  }
}

const getRandomGifs = async () => {
  try {
    const result = await axios.get(`http://localhost:3000/gifs/random`);
    showResults(result);
  } catch (err) {
    console.error(err);
  }
}

const getGifsByTag = async terms => {
  terms = ['pizza', 'robots', 'coffee', 'magic', 'gourmet'];
  try {
    const result =  await axios.get(`http://localhost:3000/tags/related/${terms}`);
    showGifsByTag(result);
  } catch (err) {
    console.error(err);
  }
}

// Todo: create accordian and table for funzies/practice for interview
showGifsByTag = result => {
  const tagContainer = document.getElementById('tag-container');

  const allTagNames = result.data.data.map(tagnames => tagnames.name);
  allTagNames.forEach(tags => {
    const children = document.createElement('p');
    children.className = "tag-names";
    children.append(tags);
    tagContainer.append(children);
  });
}


// Triggering an event on Enter key pressed to show search results
const enterKeyPressed = document.getElementById('search-bar')
.addEventListener('keyup', e => {
  e.preventDefault();
 if (e.code === 'Enter') {
   document.getElementById('search-button').click();
 }
});


  



