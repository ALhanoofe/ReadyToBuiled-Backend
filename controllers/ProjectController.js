const { Project } = require('../models')

const GetProjects = async (req, res) => {
  try {
    const projects = await Project.find({})
    res.status(200).send(projects)
  } catch (error) {
    throw error
  }
}


const GetProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    res.status(200).send(project)

  } catch (error) {
    res.status(200).send(error)
  }
}


const CreateProject = async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      // image: req.file ? `/uploads/${req.file.filename}` : ''
    }

    const project = await Project.create(projectData)
    res.status(200).send(project)
  } catch (error) {
    throw error
  }
}


const UpdateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).send(project)
  } catch (error) {
    throw error
  }
}

const DeleteProject = async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Post Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}









module.exports = {
  GetProjects,
  GetProjectById,
  CreateProject,
  UpdateProject,
  DeleteProject
}