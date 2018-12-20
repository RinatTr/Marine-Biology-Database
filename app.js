const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const researchers = require('./routes/researchers');
const species = require('./routes/species');
const animals = require('./routes/animals');
const habitats = require('./routes/habitats');
const sightings = require('./routes/sightings');
const taggings = require('./routes/taggings');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/researchers', researchers);
app.use('/species', species);
app.use('/animals', animals);
app.use('/habitats', habitats);
app.use('/sightings', sightings);
app.use('/taggings', taggings);

app.get('*', (req, res)=> {
  res.send('ERROR, you have drowned.')
})

app.listen(3000, () => {
  console.log("marine: listening to port 3000");
})
