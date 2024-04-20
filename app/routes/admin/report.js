import express from 'express'

import reportController from './../../controllers/admin/report.controller.js'

const router = express.Router()

router.route('/').get(reportController.index)
router.route('/').post(reportController.create)

export default router
