const router = require('express').Router()
const controller = require('../controllers/ProjectDetailController')
const middleware = require('../models/middleware')
const upload = require('../models/middleware/upload')

router.get('/', controller.GetProjectDetails)

router.get('/folder/:folderId', controller.GetProjectDetailByFolder)
router.get('/:id', controller.GetProjectDetailById)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  upload.single('image'),

  controller.CreateProjectDetail
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  upload.single('image'),
  controller.UpdateProjectDetail
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProjectDetail
)

module.exports = router
