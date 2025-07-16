import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin:19541954@cluster0.s1ilcxb.mongodb.net/Livraria?retryWrites=true&w=majority&appName=Cluster0");

  return mongoose.connection;
} 

export default conectaNaDatabase;
