const { Request } = require("../models")

const GetRequestsForUser = async (req, res) => {
  try {
    const { userId } = req.params

    const requests = await Request.find({ developerId: userId })
      .populate("projectId")
      .populate("developerId")

    res.status(200).json(requests)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const UpdateRequestStatus = async (req, res) => {
  try {
    const { requestId } = req.params
    const { stats } = req.body

    const updated = await Request.findByIdAndUpdate(
      requestId,
      { stats },
      { new: true }
    )

    res.status(200).json(updated)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const GetRequests = async (req, res) => {
  try {
    const request = await Request.find({})
    res.status(200).send(request)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

const createRequest = async (req, res) => {
  try {
    const { developerId, projectId } = req.body

    const existing = await Request.findOne({ developerId, projectId })
    if (existing) {
      return res.status(400).json({ message: "Request already exists" })
    }

    const request = await Request.create({
      developerId,
      projectId,
    })

    res.status(201).json(request)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  GetRequests,
  createRequest,
  GetRequestsForUser,
  UpdateRequestStatus,
}
