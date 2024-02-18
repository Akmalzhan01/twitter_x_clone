import mongoose, {ConnectOptions} from "mongoose";

let isConnect: boolean = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true)

  if(!process.env.MONGO_URL){
    return console.error("MONGO_URI is not defined")
  }
  if(isConnect){
    return
  }

  try {
    const options: ConnectOptions = {
      dbName: "twitter_x_clone",
      autoCreate: true
    };
    await mongoose.connect(process.env.MONGO_URL, options);
    isConnect=true
    console.log("Connected to database");
    
  } catch (error) {
    console.log("Error connect to database:")   
  }
}