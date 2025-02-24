const express = require("express")
const app = express()
const port = 3000

let clients=(
    {id:1,
    name: `Pablo`,
    apellido: `Escudero`}
)

app.use(express.json())

app.listen(port, ()=>{
    console.log(`Api corriendo en http://localhost:${port}`)
})

// Endpoints

app.get("/" , (req, res)=>{
    return res.status(200).json({message:"Hola bonitos"})
}
)

app.get("/clients", (req, res)=>{
    const newClient = {...req.body, id: clients.length +1}
    clients.push(newClient)
    return res.status(201).json({message:"Cliente añadido", client: newClient})
})