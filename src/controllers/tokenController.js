const jwt = require("jsonwebtoken");

//Validar Token
const validateToken = async (req,res,next) => {
    const accesToken = req.headers[`auth-token`]
    if (!accesToken) {
      res.send("Acceso Denegado")
    }
  
    jwt.verify(accesToken, process.env.SECRET_KEY,(err,user) => {
      if (err) {
        res.send("Acceso denegado, token expirado o incorrecto")
      }else{
        next()
      }
    })
  }

  module.exports = {
    validateToken
  }