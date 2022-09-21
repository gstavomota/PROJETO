module.exports = (req,res,next) =>{
    res.status(404).send("Rota não encontrada!")
}