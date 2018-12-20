const { db } = require('./connection.js');

const getAllHabitats = (req, res, next) => {
  db.any('SELECT * FROM habitats')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all habitats",
        body: data
      })
    })
    .catch(err => next(err));
}
const getOneHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id)
  db.one('SELECT * FROM habitats WHERE id=$1',habitatId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got one Habitat",
        body: data
      })
    })
    .catch(err => next(err));
}

const addHabitat = (req, res, next) => {
  db.none('INSERT INTO habitats(category) VALUES(${category})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one habitat"
      })
    })
    .catch(err => next(err));
}


module.exports = {  getAllHabitats,
                    getOneHabitat,
                    addHabitat }
/*
- GET `/habitats`: Get all habitats.
- GET `/habitats/:id`: Get single habitat.
- POST `/habitats`: Add new habitat.
*/
