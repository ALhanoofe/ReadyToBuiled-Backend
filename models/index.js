const mongoose = require('mongoose')
const userSchema = require('./User')
const folderSchema = require('./Folder')
const projectDetailSchema = require('./ProjectDetail')



const User = mongoose.model('User', userSchema)
const Folder = mongoose.model('Folder', folderSchema)
const ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema)




module.exports = {
  User,
  Folder,
  ProjectDetail

}


