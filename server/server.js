<<<<<<< HEAD
const express = require("express"),
  app = express(),
  axios = require("axios");
=======
const express = require('express'), // This is the main package you use with node.
      app     = express(), // Standard convention to use 'app' for express.
      axios   = require('axios'), // HTTP Request Package.
      mongoose = require('mongoose'), // MongoDB communicator package
      cors     = require('cors'); // Cross origin functionality

const Character = require('./models/Character'); // Schema(structure) for Characters

//Server Config
require('dotenv').config(); // Packaged used to store process.env variables
app.use(cors());

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
>>>>>>> bf6c7528574908d123b11b9459da2b54b2b950ad

app.get("/import", async (req, res) => {
  // Axios call to get API data on all characters
<<<<<<< HEAD
  const response = await axios.get("https://www.breakingbadapi.com/api/characters");
  data = response.data;
  console.log(data);

  //Write character data to our database eventually.
  for (character of data) {
    console.log(character.name);
=======
  const response = await axios.get('https://www.breakingbadapi.com/api/characters');
  const data = response.data
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
>>>>>>> bf6c7528574908d123b11b9459da2b54b2b950ad
  }

  for(character of data){
    if(character.appearance.length !== 0){
      saveData(character)
    }
  };
  res.end();
});

<<<<<<< HEAD
app.listen(process.env.PORT || 3000, () => {
  if (process.env.PORT) {
    console.log(`Server is running on ${process.env.PORT}`);
  } else {
    console.log(`Server is running on PORT 3000`);
  }
});
=======
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
>>>>>>> bf6c7528574908d123b11b9459da2b54b2b950ad
