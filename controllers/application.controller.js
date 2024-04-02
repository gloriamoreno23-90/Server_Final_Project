const { Types } = require('mongoose');
const Application = require('../models/application.model');

const listAllApplications = async (_req, res, next) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 }).lean();
    res.status(200).json(applications);
  } catch (err) {
    next(err);
  }
};

const getOneApplication = async (req, res, next) => {
  try {
    const { application_id } = req.params;

    if (!Types.ObjectId.isValid(application_id)) {
      return res.status(400).json({ msg: 'Invalid application id!' });
    }

    const application = await Application.findById(application_id).select(
      '-createdAt -updatedAt'
    );
    if (!application) {
      return res.status(404).json({ msg: 'Application not found!' });
    }
    res.status(200).json(application);
  } catch (err) {
    next(err);
  }
};

const createOneApplication = async (req, res, next) => {
  const {
    name,
    description,
    url,
    meditation_sessions,
    other_resources,
    exercises,
  } = req.body;
  try {
    if (!name || !description || !url || !meditation_sessions) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!other_resources || !exercises) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    await Application.create({
      name,
      description,
      url,
      meditation_sessions,
      other_resources,
      exercises,
    });

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const editOneApplication = async (req, res, next) => {
  try {
    const { application_id } = req.params;
    const {
      name,
      description,
      url,
      meditation_sessions,
      other_resources,
      exercises,
    } = req.body;

    if (!name || !description || !url || !meditation_sessions) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!other_resources || !exercises) {
      return res.status(400).json({ msg: 'Please fill in all fields!' });
    }

    if (!Types.ObjectId.isValid(application_id)) {
      return res.status(400).json({ msg: 'Invalid application id!' });
    }

    const application = await Application.findByIdAndUpdate(
      application_id,
      {
        name,
        description,
        url,
        meditation_sessions,
        other_resources,
        exercises,
      },
      { new: true }
    ).select('-createdAt -updatedAt');

    if (!application) {
      return res.status(404).json({ msg: 'Application not found!' });
    }

    res.status(200).json(application);
  } catch (err) {
    next(err);
  }
};

const deleteOneApplication = async (req, res, next) => {
  try {
    const { application_id } = req.params;

    if (!Types.ObjectId.isValid(application_id)) {
      return res.status(400).json({ msg: 'Invalid application id!' });
    }
    const application = await Application.findByIdAndDelete(application_id);
    if (!application) {
      return res.status(404).json({ msg: 'Application not found!' });
    }
    res.status(200).json({ msg: 'Application successfully deleted!' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listAllApplications,
  getOneApplication,
  createOneApplication,
  editOneApplication,
  deleteOneApplication,
};
