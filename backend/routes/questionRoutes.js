const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addQuestionsToSession, updateQuestionNote, togglePinQuestion } = require('../controllers/questionController');

const router = express.Router();

router.post('/add',protect,addQuestionsToSession);
router.post('/:id/pin',protect,togglePinQuestion);
router.post('/:id/note',protect,updateQuestionNote);

module.exports = router;