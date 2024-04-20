import express from 'express'
import category from './category.js'
import report from './report.js'

const router = express.Router()

router.use('/categories', category)
router.use('/reports', report)

export default router
