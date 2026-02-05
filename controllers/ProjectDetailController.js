const { ProjectDetail } = require('../models')

const GetProjectDetails = async (req, res) => {
  try {
    const projects = await ProjectDetail.find().populate("userId", "userType name")
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}





const GetProjectDetailByFolder = async (req, res) => {
  try {
    const projectDetail = await ProjectDetail.find({ folderId: req.params.folderId })
    res.status(200).send(projectDetail)
  } catch (error) {
    res.status(500).send(error)
  }


}

const GetProjectDetailById = async (req, res) => {
  try {
    const projectDetail = await ProjectDetail.findById(req.params.id)
    res.status(200).send(projectDetail)

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
  GetProjectDetailByFolder,
  GetProjectDetailById,
  CreateProjectDetail,
  UpdateProjectDetail,
  DeleteProjectDetail
}
