const bcrypt = require('bcryptjs')

module.exports = {
    register: (req, res) => {
        const {username, password, email, name} = req.body;
        if(!username || !password || !email || !name) {
            res.status(406).json({
                error: "Please fill all information"
            });
        } else {
            const db = req.app.get('db');
            db.checkForUser(username).then(users => {
                if(users.length > 0) {
                    res.status(406).json({
                        error: " Username Already Taken"
                    });
                } else {
                    bcrypt.hash(password, 10).then(hash => {
                        console.log(hash);
                        db.addUser(username, hash, email, name).then(() => {
                            req.session.user = {
                                username,
                                email,
                                name,

                            }
                            res.status(200).json(req.session.user);
                        })
                    })
                }
            })
    
        }
    }
}