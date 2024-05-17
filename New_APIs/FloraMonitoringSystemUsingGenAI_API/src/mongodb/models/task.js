import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    plant_name : {type:String,required:true},
    name : {type:String,required:true},
    isCompleted : {type:Boolean,default:false,required:true},
});


const Task = mongoose.model("Task",taskSchema);


export default Task;


// Task Actions
export const getTasks = () => Task.find();
export const getTaskById = (id) => Task.findById(id);
export const getTasksByUserId = (userId) => Task.find({ user_id: userId });
export const getTasksByPlantId = (plantId) => Task.find({ plant_id: plantId });
export const createTask = (values) => {
  console.log('Creating task with values:', values);
  return new Task(values).save()
    .then((task) => task.toObject())
    .catch((error) => {
      console.error('Error creating task:', error);
      throw error;
    });
};
export const deleteTaskById = (id) => Task.findOneAndDelete({ _id: id });
export const updateTaskById = (id, values) => Task.findByIdAndUpdate(id, values);