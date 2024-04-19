import express from 'express'
const router = express.Router()

// ROUTES
import admin from './admin/index.js'

// CONTROLLERS
import publicController from './../controllers/public.controller.js'


// MOUNT
router.use('/admin', admin)
router.route('/reports').get(publicController.reports)
router.route('/categories').get(publicController.categories)

export default router
