import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.sendFile("index");
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("Recibido <br><a href='/'>Volver</a>");
});

app.listen(3000, ()=>console.log("Puerto levantado"))