var NoteType = require('../model/noteType.js')

exports.getType = function (req, res) {
    /** 接收参数 {date:date,records:{type:'type',content:'content'}} */
    var type = req.params.type;
    console.log(type);
    NoteType.find({
        type
    }, function (err, types) {
        console.log(types);
       res.send(Object.keys(types[0].types));
    });
}
