const router = require('express').Router()
const controller = require('../controllers/ProjectController')



router.get('/', controller.GetProjects)
router.get('/:id', controller.GetProjectById)

router.post('/', controller.CreateProject)
router.put('/:id',controller.UpdateProject)
router.delete('/:id',controller.DeleteProject)

module.exports = router