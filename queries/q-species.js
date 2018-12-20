const { db } = require('./connection.js');

const getAllSpecies = (req, res, next) => {
  db.any('SELECT * FROM species')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all species",
        body: data
      })
    })
    .catch(err => next(err));
}
const getOneSpecie = (req, res, next) => {
  let specieId = parseInt(req.params.id)
  db.one('SELECT * FROM species WHERE id=$1',specieId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got one Specie",
        body: data
      })
    })
    .catch(err => next(err));
}

const addSpecie = (req, res, next) => {
  db.none('INSERT INTO species(name, is_mammal) VALUES(${name}, ${is_mammal})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one specie"
      })
    })
    .catch(err => next(err));
}


module.exports = {  getAllSpecies,
                    getOneSpecie,
                    addSpecie }
/*
- GET `/species`: Get all species.
- GET `/species/:id`: Get single species.
- POST `/species`: Add new species.
*/
