const express = require('express');
const { getAllRoles, addRole } = require('../controllers/role');

const router = express.Router();

router.get('/roles', getAllRoles);
router.post('/roles', addRole);

module.exports = router;