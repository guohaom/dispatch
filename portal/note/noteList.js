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
            lastDiary: {}
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
            respone.response.json().then(
                value => {
                    console.log('fetch value',value);
                    this.setState({
                        lastDiary: value
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
            editType: '生活'
        });
    };

    render() {
        let records = this.state.lastDiary.records;
        let allType = Object.keys(records);
        return (
            <div>
                <RaisedButton label="添加生活日志" onClick={this.handleOpen} />
                <div>
                    {
                        allType.map(
                            type => (
                                <div>
                                    <div>{type}</div>
                                    <div>{records[type]}</div>
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

}


// //将action的所有方法绑定到props上
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(null, dispatch)
// }

// todo: 没有自动 将dispatch 放入属性里, 需要调用connect
export default connect()(NoteList);
// export default NoteList;