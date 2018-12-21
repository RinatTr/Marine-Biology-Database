const { db } = require('./connection.js');

const getAllTaggings = (req, res, next) => {
  db.any('SELECT * FROM taggings')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all taggings",
        body: data
      })
    })
    .catch(err => next(err));
}
const getOneTagging = (req, res, next) => {
  let taggingId = parseInt(req.params.id)
  db.one('SELECT * FROM taggings WHERE id=$1',taggingId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got one tagging",
        body: data
      })
    })
    .catch(err => next(err));
}
const getTaggingsForResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id)
  db.any('SELECT * FROM taggings WHERE researcher_id=$1',researcherId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all taggings for a researcher",
        body: data
      })
    })
    .catch(err => next(err));
}
const getTaggingsForAnimal = (req, res, next) => {
  let animalId = parseInt(req.params.id)
  db.any('SELECT * FROM taggings WHERE animal_id=$1',animalId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all taggings for an animal",
        body: data
      })
    })
    .catch(err => next(err));
}

const addTagging = (req, res, next) => {
  db.none('INSERT INTO taggings(animal_id, researcher_id) VALUES(${animal_id}, ${researcher_id})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one tagging"
      })
    })
    .catch(err => next(err));
}

module.exports = {  getAllTaggings,
                    getOneTagging,
                    getTaggingsForResearcher,
                    getTaggingsForAnimal,
                    addTagging }
/*
- GET `/taggings`: Get all taggings. V
- GET `/taggings/:id`: Get single tagging. V
- GET `/taggings/researchers/:id`: Get all taggings performed by a specific researcher. V
- GET `/taggings/animals/:id`: Get all taggings performed on a specific animal.V
- POST `/taggings`: Add new tagging.
*/
