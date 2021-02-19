import express from 'express'
import interactionController from '../controllers/interactions.controller'

const router = express.Router()

router.get('/', interactionController.saveInteraction)
router.get('/all', interactionController.getAll)

export default router
