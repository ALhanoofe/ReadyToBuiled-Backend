const Request = require('../models/Request');

const GetRequests = async (req, res) => {
  try {
    const request = await Request.find({});
    res.status(200).send(request)
  } catch (error) {
    throw error
  }
}

const createRequest = async (req, res) => {
  try {
    const { developerId, projectId, stats } = req.body;
    const newRequest = await Request.create({ developerId, projectId, stats });
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  GetRequests,
  createRequest
};
