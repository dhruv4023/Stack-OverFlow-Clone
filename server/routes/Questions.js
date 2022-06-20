import express from 'express'

import { AskQuestion, deleteQuestion, getAllquestion} from '../controllers/Questions.js'

import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.delete('/delete/:id', auth, deleteQuestion);
router.get('/get', getAllquestion)

export default router