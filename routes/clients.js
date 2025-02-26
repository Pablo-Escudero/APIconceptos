const express = require("express")
const routes = express.Routes()


let clients=(
    {
    id:1,
    name: `Pablo`,
    apellido: `Escudero`},

    {
        id:2,
        name: `nati`,
        apellido: `Mejia`}
)

router.get("/" , (req, res)=>{
    return res.status(200).json({message:"Hola bonitos"})
}
)

router.post("/clients", (req, res)=>{
    const newClient = {...req.body, id: clients.length +1}
    clients.push(newClient)
    return res.status(201).json({message:"Cliente añadido", client: newClient})
})

router.put("/client/:id", (req, res) =>{
    const { id } = req.params;
    const index = clients.findIndex(c=> c.id = id);
    if(index !== -1){
        clients[index] = {...req.body, id: parseInt(id)}
        return res.status(200).json({mesage:"Cliente actualizado correctamente", client:clients[index]})
    }else{
        return res.status(404).json({message: "No se ha encontrado el cliente"})
    }
    return res.status(200).json(id);
})

router.delete("client/:id" , (req, res) => {
    const {id} = clients.findIndex(c => c.id == id)
    if(index == -1){
        clients.splice(index, 1)
        return  res.status(200).json({message:"Cliente eliminado"})

    }else{
        return res.status(404).json({message:"Cliente no encontrado"})
    }
})
 module.exports = routes;
