import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { lime50, yellow500, blue300 } from 'material-ui/styles/colors';

var { connect } = require('react-redux');

class EditNote extends Component {

    constructor(props, context) {
        super(props, context);
        //console.log('super');
        // this.handleOpen = this.handleOpen.bind(this);
        console.log('edit note props', props)
        this.state = {
            content: ""
        }
    }

    componentDidMount() {
        //console.log( 'editnote', this.props);
    }

    handleClose = () => {
        this.props.dispatch({
            type: 'CLOSE_EDIT_NOTE'
        });
    }

    updateContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    submit = () => {
        fetch('http://localhost:3000/note/edit', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: this.props.date,
                record: {
                    type: this.props.editType,
                    content: this.state.content
                }
            })
        }).then(
            response => response.json().then(value => {
                if (value.success) {
                    this.props.dispatch({ type: 'CLOSE_EDIT_NOTE' });
                }
            })
            )
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
                onClick={this.submit}
                />,
        ];

        return (
            <div>
                <Dialog
                    title={this.props.date}
                    titleStyle={{ fontSize: 22, margin: 5 }}
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    style={styles.dialog}
                    >
                    <div style={styles.noteTypeBlock}>
                        <Chip style={{ margin: 4 }} backgroundColor={blue300}>
                            {this.props.editType}
                        </Chip>
                    </div>
                    <textarea style={styles.noteContent}
                        onChange={this.updateContent}
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
        open: store.note.open,
        editType: store.note.editType,
        date: store.note.date
    }
}

export default connect(mapStateToProps)(EditNote);