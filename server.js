import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
const app = express();
const upload = multer({ dest: "public/img/" });

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.sendFile("index");
});



app.post("/", upload.single("archivo"), (req, res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send("Recibido <br><a href='/'>Volver</a>");
});

app.listen(3000, ()=>console.log("Puerto levantado"));

/*   JAVIER

const upload = multer({ dest: "public/img/" });

app.post("/", upload.single("archivo"), (req, res) => {
    console.log(req.body);
    console.log(req.file); // This will log the uploaded file information
    res.send("Recibido <br><a href='/'>Volver</a>");
  });

  */