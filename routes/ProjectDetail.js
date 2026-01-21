const router = require('express').Router()
const controller = require('../controllers/ProjectDetail')
const middleware = require('../models/middleware')

router.get('/', controller.GetProjectDetails)
router.get('/project/:projectId', controller.GetProjectDetailsByProject)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProjectDetail
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProjectDetail
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProjectDetail
)

module.exports = router
