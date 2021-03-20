
const getGifs = async () => {
  try{
    const result = await axios.get('http://localhost:3000/gifs');
    console.log('what is result', result);

  } catch (err) {
    console.log(err);
  }
};