const express = require('express'),
      app     = express(),
      axios   = require('axios');

app.get('/import', async (req, res) => {
  // Axios call to get API data on all characters
  const response = await axios.get('https://www.breakingbadapi.com/api/characters');
  data = response.data

  //Write character data to our database eventually.
  for(character of data){
    console.log(character.name);
  }
});

app.listen(process.env.PORT || 3000, () => {
  if(process.env.PORT){
    console.log(`Server is running on ${process.env.PORT}`);
  } else {
    console.log(`Server is running on PORT 3000`);
  }
});