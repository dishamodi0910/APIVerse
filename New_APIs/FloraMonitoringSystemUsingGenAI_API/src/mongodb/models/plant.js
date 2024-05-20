import mongoose from "mongoose";


const plantSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    name : {type:String,required:true},
    species : {type:String,required:true},
    dateOfPlanting : {type : Date , required: true},
    comment : {type:String,required:false},
    image : {type : String,required : true},
},{timestamps : true});


const Plant = mongoose.model("Plant",plantSchema);


export default Plant;


// Plant Actions

export const getPlants = () => Plant.find();
export const getPlantById = (id) => Plant.findById(id);
export const getPlantsByUserId = (userId) => Plant.find({ user_id: userId });
export const createPlant = (values) => {
  console.log('Creating plant with values:', values);
  return new Plant(values).save()
    .then((plant) => plant.toObject())
    .catch((error) => {
      console.error('Error creating plant:', error);
      throw error;
    });
};
export const deletePlantById = (id) => Plant.findOneAndDelete({ _id: id });
export const updatePlantById = (id, values) => Plant.findByIdAndUpdate(id, values);