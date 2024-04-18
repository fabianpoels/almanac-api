import express from 'express'
import report from './report.js'

const router = express.Router()

router.use('/reports', report)

export default router
