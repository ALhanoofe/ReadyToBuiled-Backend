const mongoose = require('mongoose')
const projectSchema = require('./Project')


const Project = mongoose.model('Project', projectSchema)


module.exports = {
  Project,
}


