import express from "express";
import router from "./router";
import db from "./config/db";

//Conectar a base de datos
async function connectDB() {
  try{
    await db.authenticate()
    db.sync()
    console.log('Conexión exitosa a la BD')
  }catch(error) {
    console.log(error)
    console.log('Hubo un error al conectar a la BD')
  }
}

const server = express()

server.use('/', router)

export default server