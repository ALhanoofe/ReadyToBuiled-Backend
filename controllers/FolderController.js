const { Folder } = require('../models')

const GetFolders = async (req, res) => {
  try {
    const folders = await Folder.find({})
    res.status(200).send(folders)
  } catch (error) {
    throw error
  }
}


const GetFolderById = async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.id)
    res.status(200).send(folder)

  } catch (error) {
    res.status(200).send(error)
  }
}


const CreateFolder = async (req, res) => {
  try {
    const folderData = {
      ...req.body,
      // image: req.file ? `/uploads/${req.file.filename}` : ''
    }

    const folder = await Folder.create(folderData)
    res.status(200).send(folder)
  } catch (error) {
    throw error
  }
}


const UpdateFolder = async (req, res) => {
  try {
    const folder = await Folder.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).send(folder)
  } catch (error) {
    throw error
  }
}

const DeleteFolder  = async (req, res) => {
  try {
    await Folder.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Folder Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}









module.exports = {
  GetFolders,
  GetFolderById,
  CreateFolder,
  UpdateFolder,
  DeleteFolder
}