// Get Gifs and display in image tags
const getGifs = async () => {
  try{
    const searchBar = document.getElementById('search-bar').value;
    console.log('what am am I searching for', searchBar)
    const result = await axios.get(`http://localhost:3000/gifs/${searchBar}`);
    console.log('what is result', result);
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