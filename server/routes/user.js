var user = require('../model/user.js')

var login = function(res,username,password){
    console.log( " access login -------->" + username + password)
    user.find({
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
            res.send(users);
        }else{
            res.send('cant find');
        }
    })
}
exports.login = function(req,res){
    login(res,req.query.username,req.query.password);
    // console.log("login return is "+users);
    // res.send(users);
}