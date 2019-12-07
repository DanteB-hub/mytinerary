const fs = require ('fs')
const getImage = (req,res)=>{
    fs.readFile("backendImages/activities/" + req.params.activID,(err,data)=>{
        console.log(req.params.activID)
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}
   //res.send("Aca va a ir la imagen!del "+ req.params.idProd).status(200);

module.exports = {
    getImage
}