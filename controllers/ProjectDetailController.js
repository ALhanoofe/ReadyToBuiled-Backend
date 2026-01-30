const { ProjectDetail } = require('../models')

const GetProjectDetails = async (req, res) => {
  try {
    const projectDetails = await ProjectDetail.find({})
    res.status(200).send(projectDetails)
  } catch (error) {
    throw error
  }

}

const GetProjectDetailByProject = async (req, res) => {
  try {
    const projectDetails = await ProjectDetail.find({ projectId: req.params.projectId })
    res.status(200).send(projectDetails)
  } catch (error) {
    res.status(500).send(error)
  }
}



const GetProjectById = async (req, res) => {
  try {
    const projectDetails = await ProjectDetail.findById(req.params.id)
    res.status(200).send(projectDetails)
  } catch (error) {
    res.status(500).send(error)
  }
}

const CreateProjectDetail = async (req, res) => {
  try {
    const projectDetail = await ProjectDetail.create(req.body)
    res.status(200).send(projectDetail)
  } catch (error) {
    throw error
  }
}

const UpdateProjectDetail = async (req, res) => {
  try {
    const projectDetail = await ProjectDetail.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).send(projectDetail)
  } catch (error) {
    throw error
  }
}

const DeleteProjectDetail = async (req, res) => {
  try {
    await ProjectDetail.deleteOne({ _id: req.params.id })
    res
      .status(200)
      .send({ msg: 'Project Detail Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProjectDetails,
  GetProjectById,
  GetProjectDetailByProject,
  CreateProjectDetail,
  UpdateProjectDetail,
  DeleteProjectDetail
}
