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

    }


    handleOpen = () => {
        //console.log('this.props', this.props);
        //console.log('this.context', this.context);
        this.props.dispatch({
            type: 'OPEN_EDIT_NOTE',
            editType: '编辑日志'
        });
    };

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
            </div>
        );
    }


}

const styles = {

}


// //将action的所有方法绑定到props上
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(null, dispatch)
// }

// todo: 没有自动 将dispatch 放入属性里, 需要调用connect
export default connect(null,null)(NoteList);
// export default NoteList;