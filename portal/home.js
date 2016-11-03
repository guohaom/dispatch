import React from 'react';
import { Link } from 'react-router';

//var ReactMarkdown = require('react-markdown');
//var md = require('markdown-it')();

//var Remarkable = require('remarkable');
//var md = new Remarkable();
import IconButton from 'material-ui/IconButton';
import IconModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import { lime50, yellow500, blue500 } from 'material-ui/styles/colors';

import EditDiary from './note/editDiary.js';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loginError: ""
        };
    }
    componentDidMount() {
        //var result = md.render('# markdown-it rulezz!');
        //console.log(md.render('# Remarkable rulezz!'));
        //var result = md.render('# Remarkable rulezz!');
        var result = "";
        this.setState({
            content: result
        })
    }
    toEdit = () => {
        console.log('click')
        // this.props.history.push('/home');
        //context.router
        this.props.history.push('/home/diaryList')
        //this.context.router.push('/home/edit');
    }
    render() {
        console.log('home props', this.props);
        console.log('home context', this.context);
        var input = '# This is a header\n\nAnd this is a paragraph';
        return (
            <div style={styles.body}>
                <EditDiary />
                <div style={styles.header}>
                    <IconButton tooltip="编辑日志" onClick={this.toEdit}>
                        <IconModeEdit color={lime50} />
                    </IconButton>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const styles = {
    body: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'black',
        color: 'white'
    }
}

export default Home;