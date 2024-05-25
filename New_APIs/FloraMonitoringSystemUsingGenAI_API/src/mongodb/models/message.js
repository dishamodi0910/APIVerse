import mongoose from "mongoose";



const messageSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    sent_By : { type : String , enum : ["user","gemini"], required : true }, 
    message_content : {type : String , required : true},
},{timestamps:true});


const Message = mongoose.model("Message",messageSchema);


export default Message; 



// Message Actions
export const getMessages = () => Message.find();
export const getMessageById = (id) => Message.findById(id);
export const getMessagesByUserId = (userId) => Message.find({ user_id: userId });
export const createMessage = (values) => {
  console.log('Creating message with values:', values);
  return new Message(values).save()
    .then((message) => message.toObject())
    .catch((error) => {
      console.error('Error creating message:', error);
      throw error;
    });
};
export const deleteMessageById = (id) => Message.findOneAndDelete({ _id: id });
export const updateMessageById = (id, values) => Message.findByIdAndUpdate(id, values);