
var webpack = require('webpack');

module.exports = {
    entry:{
        home:'./portal/home.js',
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
