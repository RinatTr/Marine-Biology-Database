const { db } = require('./connection.js');

const getAllAnimals = (req, res, next) => {
  db.any('SELECT * FROM animals')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all animals",
        body: data
      })
    })
    .catch(err => next(err));
}
const getOneAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id)
  db.one('SELECT * FROM animals WHERE id=$1',animalId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got one animal",
        body: data
      })
    })
    .catch(err => next(err));
}

const addAnimal = (req, res, next) => {
  db.none('INSERT INTO animals(species_id, nickname) VALUES(${species_id}, ${nickname})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one animal"
      })
    })
    .catch(err => next(err));
}

const editAnimal = (req, res, next) => { //PATCH
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE animals SET '+queryString+' WHERE id='+req.params.id, req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Animal was edited"
      })
    })
    .catch(err => next(err));
}

const deleteAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id)
  db.none('DELETE FROM animals WHERE id=$1',animalId)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Animal was deleted"
      })
    })
    .catch(err => next(err));
}
module.exports = {  getAllAnimals,
                    getOneAnimal,
                    addAnimal,
                    editAnimal,
                    deleteAnimal }
/*
- GET `/animals`: Get all animals.
- GET `/animals/:id`: Get single animal.
- POST `/animals`: Add new animal.
- PATCH `/animals/:id`: Update single animal.
- DELETE `/animals/:id`: Delete single animal.
*/
