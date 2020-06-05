const User = require('../models/user');

module.exports = {
    async registrar(req,res) {
        const user = await User.create(req.body);
        return res.json(user);
    }

}

