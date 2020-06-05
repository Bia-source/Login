const User = require('../models/user');

module.exports = {
    async registrar(req,res) {
        try{
            const user = await User.create(req.body);
            return res.json(user);
        } catch (err){
           return res.status(400).send({ error: 'Falha no registro'});
        }
        
    }

}

