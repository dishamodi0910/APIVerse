import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));
}

export default connectDB;