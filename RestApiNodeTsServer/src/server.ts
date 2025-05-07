import express from "express";

const server = express()

//Routing
server.post('/', (req, res) => {
  const datos = [
    {id: 1, nombre: 'Alex'},
    {id: 2, nombre: 'Juan'}
  ]
    res.send(datos)
})

export default server