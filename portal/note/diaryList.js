import React from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { lime50, yellow500, blue300 } from 'material-ui/styles/colors';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class DiaryList extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            diaries : []
        }

    }

    componentDidMount() {
        // get the last day s diary
        console.log(' begin fetch');
        fetch('/diary/last', {
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
                        diaries : value
                    })
                }
            )
            )
    }


    handleOpen = () => {
        // 获取今天
        let now = new Date();
        this.props.dispatch({
            type: 'OPEN_EDIT_DIARY',
            diaryType: '学习',
            diaryDate: now
        });
    };

    render() {
        let diaries = this.state.diaries;
        return (
            <div style={{width:'100%'}}>
                <RaisedButton label="添加日志" onClick={this.handleOpen} />
                <div>
                    {
                        diaries.map(
                            (diary) => (
                                <div style={styles.diary}>
                                    <div style={styles.date}>{diary.date}</div>
                                    {Object.keys(diary.records).map(
                                        (type) => (
                                            <div style={styles.oneType}>
                                                <div style={styles.typeName}>{type}</div>
                                                <div style={styles.content}>{diary.records[type].content}</div>
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
    diary:{
        margin:'10px 0 0 0'
    },
    date:{
        width: '100%',
        backgroundColor: '#fff1cb',
        fontSize: 25
        
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
export default connect()(DiaryList);
// export default DiaryList;