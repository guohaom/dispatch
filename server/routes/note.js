var Note = require('../model/note.js')

exports.edit = function (req, res) {
    /** 接收参数 {date:date,records:{type:'type',content:'content'}} */
    var date = req.body.date;
    var type = req.body.record.type;
    var content = req.body.record.content;
    console.log('param',date,type,content);
    Note.find({
        date
    }, function (err, diaries) {
        console.log('find note',diaries);
        if (diaries.length != 0) {
            var diary = diaries[0];
            // 如果没有此类型的日志,则添加
            if( typeof diary.records[type] === 'undefined'){
                console.log( '还没有此类型')
                diary.records[type] = {
                    content
                }
            }else{
                // 有此类型, 更新内容
                console.log('已存在类型');
                diary.records[type].content = content;
            }
            console.log('更新后的diary',diary);
            // 坑 >> 混合类型更新后必须执行 markModified
            diary.markModified('records');
            diary.save( function(err){
                console.log('save err'+err)
            });
        } else {
            var note = new Note({
                date: req.body.date,
                records: {
                    [type]: {
                        content
                    }
                }
            });
            note.save();
        }
    });

    res.send({success:true});
}

exports.getLast = function(req,res){
    Note.find({}).limit(1).sort({date:-1}).exec(function(err,doc ){
        res.send(doc);
    })
}

