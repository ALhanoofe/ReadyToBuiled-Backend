const mongoose = require('mongoose')
const userSchema =require('./User')
const projectSchema = require('./Project')
const projectDetailSchema = require('./ProjectDetail')



const User = mongoose.model('User', userSchema)
const Project = mongoose.model('Project', projectSchema)
const ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema)




module.exports = {
  User,
  Project,
  ProjectDetail

}


