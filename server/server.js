const express = require('express'), // This is the main package you use with node.
      app     = express(), // Standard convention to use 'app' for express.
      axios   = require('axios'), // HTTP Request Package.
      mongoose = require('mongoose'); // MongoDB communicator package

const Character = require('./models/Character'); // Schema(structure) for Characters

require('dotenv').config(); // Packaged used to store process.env variables

mongoose.connect(process.env.DATABASEURL , { 
  // Main connect function to connect to DB
  useNewUrlParser: true, // These are just settings for removing deprication errors
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to DB!');
}).catch(err => {
  console.log('ERROR:', err.message);
});

app.get('/import', async (req, res) => {
  // Axios call to get API data on all characters
  const response = await axios.get('https://www.breakingbadapi.com/api/characters');
  data = response.data
  console.log(data);

  //Write character data to our database eventually.
  const saveData = (character) => {
    const newCharacter = {
      name: character.name,
      power: (character.appearance.length * 10) + (Math.floor(Math.random() * 10 + 1)),
      defense: Math.floor((character.appearance.length * 10) + (Math.floor(Math.random() * 10 + 1)) / 2),
      img: character.img,
      actor: character.portrayed,
      bcsAppearance: character.better_call_saul_appearance.length > 0
    }
    Character.create(newCharacter, (err, newlyCreated)=> {
      if(err){
        console.log(err)
      } else {
        console.log('Characters Created!');
      }
    });
  }

  for(character of data){
    if(character.appearance.length !== 0){
      saveData(character)
    }
  };

  res.end();
});

app.get('/characters', (req, res) => {
  Character.find({}, (err, foundCharacters) => {
    if(err){
      console.log(err);
    } else {
      res.json(foundCharacters);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});