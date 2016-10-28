import React,{ Component } from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { lime50, yellow500, blue300 } from 'material-ui/styles/colors';

var { connect } = require('react-redux');

class EditNote extends Component{

    constructor(props, context) {
            super(props, context);
            //console.log('super');
            // this.handleOpen = this.handleOpen.bind(this);
            console.log('edit note props',props)
        }

    componentDidMount () {
        //console.log( 'editnote', this.props);
    }

    handleClose = () => {
        this.props.dispatch({
            type: 'CLOSE_EDIT_NOTE'
        });
    }

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
                onClick={this.handleClose}
                />,
        ];

        return (
            <div>
                <Dialog
                    title="添加日志"
                    titleStyle={{ fontSize: 22, margin: 5 }}
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    style={styles.dialog}
                    >
                    <div style={styles.noteTypeBlock}>
                        <Chip style={{ margin: 4 }} backgroundColor={blue300}>
                            工作任务
                        </Chip>
                        <Chip style={{ margin: 4 }}>
                            生活记录
                        </Chip>
                    </div>
                    <textarea style={styles.noteContent} 
                    />
                </Dialog>
            </div>
        );
    }

}

const styles = {
    dialog: {

    },
    noteTypeBlock: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    noteContent: {
        width: '100%',
        height: 300,
        margin: '10px 0 0 0',
        borderRadius: 5
    }
}

function mapStateToProps(store) {
  return {
    open: store.note.open
  }
}

export default connect(mapStateToProps)(EditNote);