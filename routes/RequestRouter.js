const router = require('express').Router()

const controller = require('../controllers/RequestController')

const middleware = require('../models/middleware')


router.get('/', controller.GetRequests)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.createRequest)

module.exports = router
