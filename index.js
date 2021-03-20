
const getGifs = async () => {
  try{
    const result = await axios.get('http://localhost:3000/gifs');
    console.log('what is result', result);
    const container = document.getElementById("gif-container");
    const children = result.data.data.forEach(gif => {
      const child = document.createElement("img");
      child.src = gif.images.downsized.url;
      console.log('checking src', child.src);
      container.append(child);
    });
  } catch (err) {
    console.log(err);
  }
};