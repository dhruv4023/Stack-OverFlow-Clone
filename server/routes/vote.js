import express from "express";

import { voteQuestion } from '../controllers/vote.js'

const router = express.Router();

router.patch('/vote/:id', voteQuestion)

export default router;