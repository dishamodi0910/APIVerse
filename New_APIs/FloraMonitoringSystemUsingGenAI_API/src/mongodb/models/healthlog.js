import mongoose from "mongoose";


const healthLogSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    plant_id : { type: mongoose.Schema.Types.ObjectId,ref: 'Plant'},
    attachment : {type  : String , required : false},
    name : {type  : String , required : false},
    comment : {type:String,required:false},
    dateOfDiagnosis : {type : Date , required: true},
    diagnosisByModel : {type:String,required:false},
});


const HealthLog = mongoose.model("HealthLog",healthLogSchema);

export default HealthLog;


// HealthLog Actions
export const getHealthLogs = () => HealthLog.find();
export const getHealthLogById = (id) => HealthLog.findById(id);
export const getHealthLogsByUserId = (userId) => HealthLog.find({ user_id: userId });
export const getHealthLogsByPlantId = (plantId) => HealthLog.find({ plant_id: plantId });
export const createHealthLog = (values) => {
  console.log('Creating health log with values:', values);
  return new HealthLog(values).save()
    .then((healthLog) => healthLog.toObject())
    .catch((error) => {
      console.error('Error creating health log:', error);
      throw error;
    });
};
export const deleteHealthLogById = (id) => HealthLog.findOneAndDelete({ _id: id });
export const updateHealthLogById = (id, values) => HealthLog.findByIdAndUpdate(id, values);