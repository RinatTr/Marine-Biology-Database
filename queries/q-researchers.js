const { db } = require('./connection.js');

const getAllResearchers = (req, res, next) => {
  db.any('SELECT * FROM researchers')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got all researchers",
        body: data
      })
    })
    .catch(err => next(err));
}
const getOneResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id)
  db.one('SELECT * FROM researchers WHERE id=$1',researcherId)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Got one researcher",
        body: data
      })
    })
    .catch(err => next(err));
}

const addResearcher = (req, res, next) => {
  db.none('INSERT INTO researchers(name, job_title) VALUES(${name}, ${job_title})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Added one researcher"
      })
    })
    .catch(err => next(err));
}

const editResearcher = (req, res, next) => { //PATCH
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE researchers SET '+queryString+' WHERE id='+req.params.id, req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Researcher was edited"
      })
    })
    .catch(err => next(err));
}

const deleteResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id)
  db.none('DELETE FROM researchers WHERE id=$1',researcherId)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Researcher was deleted"
      })
    })
    .catch(err => next(err));
}
module.exports = {  getAllResearchers,
                    getOneResearcher,
                    addResearcher,
                    editResearcher,
                    deleteResearcher }
/*
- GET `/researchers`: Get all researchers.
- GET `/researchers/:id`: Get single researcher.
- POST `/researchers`: Add new researcher.
- PATCH `/researchers/:id`: Update single researcher.
- DELETE `/researchers/:id`: Delete single researcher.
*/
