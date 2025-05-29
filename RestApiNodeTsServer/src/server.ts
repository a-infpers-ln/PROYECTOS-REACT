import express from "express";
import router from "./router";

const server = express()

server.use('/', router)

export default server