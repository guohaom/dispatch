var User = require('../model/user.js')

var login = function(res,username,password){
    console.log( " access login -------->" + username + password)
    User.find({
        name: username,
        password: password
    },function(err,users){
        console.log(" access find result")
        console.log( err );
        console.log( users );
        if( err ){
            console.error(err);
        }
        if( users.length != 0 ){
            res.send({
                success: true    
            });
        }else{
            res.send({
                success: false
            });
        }
    })
}

exports.login = function(req,res){
    console.log(req.params);
    login(res,req.body.username,req.body.password);
    // console.log("login return is "+users);
    // res.send(users);
}