
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
    showTagTable(result);
  } catch (err) {
    console.error(err);
  }
}

// Initial gifs on load
getGifs('plants');

// Tag table
// TODO: Migrate styles over to css file
showTagTable = result => {
  const allTagNames = result.data.data.map(tagnames => tagnames.name);

  // I could set table to be an empty string and then create rows variable and set it to a value
  // I could also use a for loop to loop through rows and another loop for columns;
  const tableOfTags = document.createElement('table');
  tableOfTags.setAttribute('class', 'tags-results-table');
  tableOfTags.style.border = '2px solid blue';
  tableOfTags.style.margin = 'auto';

  const tableTagBody = document.createElement('tbody');
  tableOfTags.appendChild(tableTagBody);

  const tagTableHeader = document.createElement('th');
  tagTableHeader.textContent = 'Tag Results';
  tagTableHeader.setAttribute('class', 'tag-table-header');
  tagTableHeader.textAlign = 'center';
  tableTagBody.appendChild(tagTableHeader);

  allTagNames.forEach(tag => {
    let tableRows = document.createElement('tr');
    tableRows.style.border = '3px solid blue';
    tableRows.style.padding = '6px';

    let tableData = document.createElement('td');
    tableData.setAttribute('class', 'tag-data');
    tableData.style.border = '3px solid blue';
    tableData.style.color = 'black';
    tableData.style.textAlign = 'center';
    tableData.style.padding = '10px';
    tableData.textContent = tag;

    tableTagBody.appendChild(tableRows);
    tableRows.appendChild(tableData);
    document.body.append(tableOfTags);
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


  



