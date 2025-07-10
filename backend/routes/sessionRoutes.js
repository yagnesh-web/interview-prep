const express = require('express');
const { createSession, getMySessions, getSessionById, deleteSessions } = require('../controllers/sessionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create',protect, createSession);
router.get('/my-sessions',protect, getMySessions);
router.get('/:id',protect, getSessionById);
router.delete('/:id',protect, deleteSessions);
// console.log(router);

module.exports = router;