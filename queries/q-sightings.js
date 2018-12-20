const { db } = require('./connection.js');

const getAllSightings = (req, res, next) => {
  db.any('SELECT * FROM sightings')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all sightings",
        body: data
      })
    })
    .catch(err => next(err));
}
const getSightingsForSpecies = (req, res, next) => {
  let speciesId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE species_id=$1',speciesId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all sightings for a species",
        body: data
      })
    })
    .catch(err => next(err));
}
const getSightingsForResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE researcher_id=$1',researcherId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all sightings for a researcher",
        body: data
      })
    })
    .catch(err => next(err));
}
const getSightingsForHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id)
  db.any('SELECT * FROM sightings WHERE habitat_id=$1',habitatId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all sightings for a habitat",
        body: data
      })
    })
    .catch(err => next(err));
}

const addSighting = (req, res, next) => {
  db.none('INSERT INTO sightings(researcher_id, species_id, habitat_id) VALUES(${researcher_id}, ${species_id}, ${habitat_id})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one sighting"
      })
    })
    .catch(err => next(err));
}


const deleteSighting = (req, res, next) => {
  let sightingId = parseInt(req.params.id)
  db.none('DELETE FROM sightings WHERE id=$1',sightingId)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Sighting was deleted"
      })
    })
    .catch(err => next(err));
}
module.exports = {  getAllSightings,
                    getSightingsForSpecies,
                    getSightingsForResearcher,
                    getSightingsForHabitat,
                    addSighting,
                    deleteSighting }
/*
- GET `/sightings`: Get all sightings.
- GET `/sightings/species/:id`: Get all sightings of a specific species.
- GET `/sightings/researchers/:id`: Get all sightings for a specific researcher.
- GET `/sightings/habitats/:id`: Get all sightings for a specific habitat.
- POST `/sightings`: Add new sighting.
- DELETE `/sightings/:id`: Delete single sighting.
*/
