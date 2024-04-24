import express from 'express'
const router = express.Router()

import { config } from './../config/index.js'

// ROUTES
import admin from './admin/index.js'
import auth from './auth.js'

// CONTROLLERS
import devController from './../controllers/dev.controller.js'
import openController from '../controllers/open.controller.js'

// MIDDLEWARE
import authMiddleware from './../middleware/auth.middleware.js'
import adminMiddleware from './../middleware/admin.middleware.js'

// MOUNT
router.use('/auth', auth)

// FROM HERE ON, AUTH IS REQUIRED SO INJECT THE USER IN THE REQ
router.use(authMiddleware)

router.use('/admin', adminMiddleware, admin)
router.route('/reports').get(openController.reports)
router.route('/categories').get(openController.categories)

// DEV ONLY
// if (config.env === 'development') {
//   router.route('/dev/create_users').post(devController.createUsers)
// }

export default router
