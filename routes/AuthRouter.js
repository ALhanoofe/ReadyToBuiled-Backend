const router = require('express').Router()
const controller = require('../controllers/AuthController')

router.post('/register', controller.Register)
router.post('/login', controller.Login)
router.put(
  '/update/:id',
  controller.UpdatePassword
)
router.get(
  '/session',
  controller.CheckSession
)

module.exports = router
