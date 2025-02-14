import mongoose from "mongoose";

const dbConnect = async ()=>{
    try{
       const connection = await mongoose.connect('mongodb://localhost:27017/News_AI')
       console.log('MONGODB CONNECTED');
       
    }catch (error) {
        console.log(error);
        
    }
    
};

export default dbConnect;