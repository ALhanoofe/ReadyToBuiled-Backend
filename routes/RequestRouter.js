const router = require('express').Router()

const controller = require('../controllers/RequestController')

const middleware = require('../models/middleware')


router.get('/', controller.GetRequests)
router.get('/user/:userId', controller.GetRequestsForUser)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.createRequest)
router.put(
  '/:requestId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRequestStatus
)


module.exports = router
