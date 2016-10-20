import React from 'react';
import {Link} from 'react-router';

//var ReactMarkdown = require('react-markdown');
//var md = require('markdown-it')();

//var Remarkable = require('remarkable');
//var md = new Remarkable();



export default class Home extends React.Component{
 constructor(props) {
    super(props);
 this.state = {
        content : ""
    }

 }

 componentDidMount(){
    //var result = md.render('# markdown-it rulezz!');
    //console.log(md.render('# Remarkable rulezz!'));
    //var result = md.render('# Remarkable rulezz!');
    var result = "";
    this.setState({
        content : result
    })
 }
 render(){
    var input = '# This is a header\n\nAnd this is a paragraph';
     return(
         <div>{this.state.content}</div>

     )
 }
}