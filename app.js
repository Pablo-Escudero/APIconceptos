const express = require("express")
const app = express()
const port = 3000
const clientRoute = require(".routes/clients")

app.use(express.json())
app.use(clientRoute)

app.listen(port, ()=>{
    console.log(`Api corriendo en http://localhost:${port}`)
})

// Endpoints


