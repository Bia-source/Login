const User = require('../models/user');
const bcrypto = require('bcryptjs');

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
        
    },

    async Authenticate(req,res){
       const { email, password } = req.body;
       const user = await User.findOne({ email }).select('+password');
       if(!user)
          return res.status(400).send({ erro: 'Usuário não encontrado'});
       
       // verificando se a senha do usuario é a mesma salva no bd   
       if(!await bcrypto.compare(password, user.password));  
       return res.status(400).send({ erro: 'Usuário ou senha invalidos', user});
 
     
    },

}

