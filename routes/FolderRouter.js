const router = require('express').Router()
const controller = require('../controllers/FolderController')
const middleware = require('../models/middleware')

router.get(
  '/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetFoldersByUser
);

router.get('/', controller.GetFolders)
router.get('/:id', controller.GetFolderById)

router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateFolder)

router.put('/:id', middleware.stripToken, middleware.verifyToken, controller.UpdateFolder)

router.delete('/:id', middleware.stripToken, middleware.verifyToken, controller.DeleteFolder)
module.exports = router

