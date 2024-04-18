import express from 'express'

import reportsController from './../controllers/report.controller.js'

const router = express.Router()

router.route('/').get(reportsController.index)

export default router
