
var webpack = require('webpack');

module.exports = {
    entry:{
        bind :'./portal/index.js',
    },
    output:{
        path:'./views/js',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {test: /\.js$/, loader: 'babel-loader'// ES6
            }
        ]
    }
}
