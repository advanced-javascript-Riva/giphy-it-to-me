
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
  terms = ['pizza', 'robots', 'coffee', 'magic', 'gourmet', 'wizards'];
  try {
    const result =  await axios.get(`http://localhost:3000/tags/related/${terms}`);
    showGifsByTag(result);
  } catch (err) {
    console.error(err);
  }
}

// Initial gifs on load
getGifs('plants');

// Todo: create accordian and table for funzies/practice for interview
showGifsByTag = result => {
  const tagContainer = document.getElementById('tag-container');

  const tagHeader = document.createElement('h3');
  tagHeader.className="tag-results";
  let tagHeaderTitle = 'Tag Results';
  tagHeader.append(tagHeaderTitle);
  tagContainer.append(tagHeader);

  const allTagNames = result.data.data.map(tagnames => tagnames.name);
  const allChildrenOfTagContainer = allTagNames.forEach(tags => {
    const namesOfTags = document.createElement('p');
    namesOfTags.className = "tag-names";
    namesOfTags.append(tags);
    tagContainer.append(namesOfTags);
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


  



