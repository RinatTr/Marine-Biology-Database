const express = require('express');
const router = express.Router();
const { getAllResearchers,
        getOneResearcher,
        addResearcher,
        editResearcher,
        deleteResearcher } = require('../queries/q-researchers')

router.get('/', getAllResearchers);
router.get('/:id', getOneResearcher);
router.post('/', addResearcher);
router.patch('/:id', editResearcher);
router.delete('/:id', deleteResearcher);

module.exports = router
