import mongoose from "mongoose";

const connectMongo = async() => {
    try{
        await mongoose.connect(process.env.MongoDbUri);
        console.log("Connected to MongoDb")
    }catch(err){
        console.log(err)
    }
}

export default connectMongo;