import React from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { lime50, yellow500, blue300 } from 'material-ui/styles/colors';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NoteList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            notes : []
        }

    }

    componentDidMount() {
        // get the last day s note
        console.log(' begin fetch');
        fetch('/note/last', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            response => 
            response.json().then(
                value => {
                    console.log('fetch value',value);
                    this.setState({
                        notes : value
                    })
                }
            )
            )
    }


    handleOpen = () => {
        //console.log('this.props', this.props);
        //console.log('this.context', this.context);
        this.props.dispatch({
            type: 'OPEN_EDIT_NOTE',
            editType: '花费'
        });
    };

    render() {
        let notes = this.state.notes;
        return (
            <div>
                <RaisedButton label="添加生活日志" onClick={this.handleOpen} />
                <div>
                    {
                        notes.map(
                            (note) => (
                                <div style={styles.oneNote}>
                                    <div style={styles.date}>{note.date}</div>
                                    {Object.keys(note.records).map(
                                        (type) => (
                                            <div style={styles.oneType}>
                                                <div style={styles.typeName}>{type}</div>
                                                <div style={styles.content}>{note.records[type].content}</div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }


}

const styles = {
    oneNote:{
        margin:'10px 0 0 0'
    },
    date:{
        width: '100%',
        backgroundColor: '#fff1cb',
        fontSize: 25,
        padding: 10
    },
    oneType:{
        border:'1px solid #ccc',
        borderLeft:'3px solid blue',
        padding: 10,
        margin:'5px 0 0 0'
    },
    typeName:{
        color: 'blue'
    },
    content:{
        margin:'10px 0 0 0'
    }
}


// //将action的所有方法绑定到props上
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(null, dispatch)
// }

// todo: 没有自动 将dispatch 放入属性里, 需要调用connect
export default connect()(NoteList);
// export default NoteList;