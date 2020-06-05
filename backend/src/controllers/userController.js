const User = require('../models/user');

module.exports = {
    async registrar(req,res) {
        try{
            const { email } = req.body;
            if( await User.findOne( { email })){
                return res.status(400).send({ error: 'Esse usuário já existe'});
            }
            const user = await User.create(req.body);
            user.password = undefined;
            return res.json(user);
        } catch (err){
           return res.status(400).send({ error: 'Falha no registro'});
        }
        
    }

}

