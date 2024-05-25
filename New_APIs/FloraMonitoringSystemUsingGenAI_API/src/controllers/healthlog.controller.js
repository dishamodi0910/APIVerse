import { getHealthLogs, getHealthLogById, getHealthLogsByUserId, getHealthLogsByPlantId, createHealthLog, deleteHealthLogById, updateHealthLogById } from '../mongodb/models/healthlog.js';
import { getPlantById } from '../mongodb/models/plant.js';
import { uploadOnCloudinary } from '../utlils/cloudinary.js';
import { convertoBuffer, provideHealthlog } from '../utlils/gemini.js';

export const getAllHealthLogs = async (req, res) => {
  try {
    const healthLogs = await getHealthLogs();

    return res.status(200).json(healthLogs);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getHealthLog = async (req, res) => {
  try {
    const { id  } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'No id provided' });
    }

    const healthLog = await getHealthLogById(id);

    if (!healthLog) {
      return res.status(404).json({ message: 'HealthLog not found' });
    }

    return res.json(healthLog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getHealthLogsByuserId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'No user_id provided' });
    }

    const healthLogs = await getHealthLogsByUserId(id);

    if (!healthLogs) {
      return res.status(404).json({ message: 'HealthLogs not found' });
    }

    return res.json(healthLogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getHealthLogsByplantId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'No plant_id provided' });
    }

    const healthLogs = await getHealthLogsByPlantId(id);

    if (!healthLogs) {
      return res.status(404).json({ message: 'HealthLogs not found' });
    }

    return res.json(healthLogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const createNewHealthLog = async (req, res) => {
  try {
    const { user_id, plant_id, comment, dateOfDiagnosis,name } = req.body;
    // console.log(req.file);
    console.log(req.body);

    if (!user_id || !plant_id || !dateOfDiagnosis) {
      return res.status(400).json({ message: 'User ID, Plant ID and date of diagnosis are required' });
    }

    const plant = await getPlantById(plant_id);
    const supportData = "dateofPlanting" + plant.dateOfPlanting.toISOString() + plant.comment + comment ;
    console.log(supportData);
    // const supportData = "are you receiving the image along with the message?"

    const bufferData = convertoBuffer(req.file.path , req.file.mimetype);
    console.log("bufferData",bufferData.inlineData.data);

    const diagnosisByModel = await provideHealthlog(supportData,bufferData);
    console.log(diagnosisByModel);

    const image = await uploadOnCloudinary(req.file.path);
    const imageLink = image.secure_url;


    const healthLog = await createHealthLog({ user_id, plant_id, attachment:imageLink , name , comment, dateOfDiagnosis, diagnosisByModel });

    return res.status(201).json(healthLog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteHealthLog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedHealthLog = await deleteHealthLogById(id);

    return res.json(deletedHealthLog);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateHealthLog = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, plant_id, attachment, comment, dateOfDiagnosis, diagnosisByModel } = req.body;

    if (!user_id || !plant_id || !dateOfDiagnosis){
      return res.sendStatus(400);
    }

    const updatedHealthLog = await updateHealthLogById(id, { user_id, plant_id, attachment, comment, dateOfDiagnosis, diagnosisByModel });

    return res.status(200).json(updatedHealthLog).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};