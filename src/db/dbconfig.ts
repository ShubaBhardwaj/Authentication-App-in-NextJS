import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        console.log("Database connected successfully");
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("Database connection established");
        })

        connection.on("error", (err) => {
            console.log("Database connection error");
            console.log(err);
            process.exit(1); // Exit the process if connection fails
        })

    } catch (error) {
        console.log("somthing goes wrong");
        console.log(error);
    }
}









