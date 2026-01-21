const router = require('express').Router()
const controller = require('../controllers/ProjectController')
const middleware = require('../models/middleware')


router.get('/', controller.GetProjects)
router.get('/:id', controller.GetProjectById)

router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateProject)
router.put('/:id', middleware.stripToken, middleware.verifyToken, controller.UpdateProject)
router.delete('/:id', middleware.stripToken, middleware.verifyToken, controller.DeleteProject)

module.exports = router