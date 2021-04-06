// Get Gifs and display in image tags
const getGifs = async () => {
  try{
    const searchBar = document.getElementById('search-bar').value;
    const result = await axios.get(`http://localhost:3000/gifs/${searchBar}`);
    const container = document.getElementById("gif-container");
    const children = result.data.data.forEach(gif => {
      const child = document.createElement("img");
      child.className="gif-image";
      child.src = gif.images.downsized.url;
      container.append(child);
    });
  } catch (err) {
    console.log(err);
  }
};
// Triggering an even on Enter key pressed to show search results
const enterKeyPressed = document.getElementById('search-bar')
.addEventListener('keyup', e => {
  e.preventDefault();
 if (e.code === 'Enter') {
   document.getElementById('search-button').click();
 }
});

// Trigger an event when searchIcon clicked and show results
const searchIconClicked = document.addEventListener('click', e => {
   if(!e.target.closest('.bi-search')) return;
   console.log(e.target)
   getGifs();
 }, false)
  

// Clear old Search data after user clicks on X

