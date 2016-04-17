var router = express.Router();
var knex = require('../../db/knex');

// -------------------------------
// SIGN UP -----------------------
// -------------------------------
router.post('/signup', function(req, res){
    knex('users').where({ username: req.body.username }).first().then(funcion(user){
        if(user){
            return res.status(400).send('Username already exist');
        } else {
            knex('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                .returning('id').then(function(){
                    res.redirect('/');
                });
        }

    }).catch(function(err){
        console.log(err);
    });
});

// -------------------------------
// SIGN IN -----------------------
// -------------------------------
router.post('/signin', function(req, res){
    knex('users').where({ username: req.body.username }).first().then(funcion(user){
        if(user){
            res.cookie('userID', user.id, { signed: true });
            res.redirect('/');
        } else {
            return res.status(400).send('Invalid username/password');
        }

    });
});
