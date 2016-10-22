import React from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {lime50, yellow500, blue300} from 'material-ui/styles/colors';


const EditNote = React.createClass({

    getInitialState() {
        return {
            open: false,
        }
    },

    handleOpen() {
        console.log('open press')
        this.setState({ open: true });
    },

    handleClose() {
        console.log(' close press')
        this.setState({ open: false });
    },

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onClick={this.handleClose}
                />,
        ];

        return (
            <div>
                <RaisedButton label="添加日志" onClick={this.handleOpen} />
                <Dialog
                    title="添加日志"
                    titleStyle={ {fontSize:22, margin:5} }
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    style={styles.dialog}
                    >
                    <div style = { styles.noteTypeBlock}>
                        <Chip style={{ margin: 4 }} backgroundColor={blue300}>
                                工作任务
                        </Chip>
                        <Chip style={{ margin: 4 }}>
                                生活记录
                        </Chip>
                    </div>
                    <textarea style = {styles.noteContent}>
                        xyz
                   </textarea>
                </Dialog>
            </div>
        );
    }


})

const styles = {
    dialog:{
        
    },
    noteTypeBlock : {
        display: 'flex',
        flexWrap: 'wrap',
    },
    noteContent : {
        width: '100%',
        height: 300,
        margin: '10px 0 0 0',
        borderRadius: 5
    }
}

export default EditNote;