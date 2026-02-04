const router = require('express').Router()
const controller = require('../controllers/ProjectDetailController')
const middleware = require('../models/middleware')

router.get('/', controller.GetProjectDetails)





router.get(
  '/customers/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetProjectByIdForCustomer)

router.get(
  '/developer/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetProjectByIdForDeveloper)


router.get(
  '/:projectId',
  controller.GetProjectDetailByProject)

router.get('/:id', controller.GetProjectById)




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
