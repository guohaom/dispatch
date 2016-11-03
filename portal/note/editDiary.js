import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker'
import { lime50, yellow500, blue300 } from 'material-ui/styles/colors';

var { connect } = require('react-redux');

class EditDiary extends Component {

    constructor(props) {
        super(props);
        console.log('constructor props', props);
        // this.handleOpen = this.handleOpen.bind(this);
        const now = new Date();
        console.log('edit Diary props', props)
        this.state = {
            diaryType: null,
            diaryDate: null,
            content: "",
            selectDiaryTypes: []
        }
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('nextProps', nextProps);
        // 由 redux 传递过来的参数,设置到当前组件的state中
        this.setState({
            diaryType: nextProps.diaryType,
            diaryDate: nextProps.diaryDate
        })
    }

    componentDidMount = () => {
        console.log('----', this.props.editType)
        console.log(this.props.date)
        //获取所有类型
        fetch('/noteType/diary', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json().then(result => {
                this.setState({
                    selectDiaryTypes: result
                })
            })
            )
    }

    handleClose = () => {
        this.props.dispatch({
            type: 'CLOSE_EDIT_DIARY'
        });
    }

    handleDateChange = (event, date) => {
        this.props.dispatch({
            type: 'SWITCH_DIARY_DATE',
            diaryDate: date
        })
    }

    updateContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    updateCurrentDiaryType = (type) => {
        this.setState({
            diaryType: type
        })
    }

    handleRequestDelete = () => {
        this.setState({
            diaryType: null
        })
    }

    submit = () => {
        const diaryTime = this.state.diaryDate;
        fetch('http://localhost:3000/diary/edit', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // date: diaryTime.getFullYear()+'-'+(diaryTime.getMonth()+1)+'-'+diaryTime.getDate(),
                record: {
                    type: this.state.diaryType,
                    content: this.state.content
                }
            })
        }).then(
            response => response.json().then(value => {
                if (value.success) {
                    this.props.dispatch({ type: 'CLOSE_EDIT_DIARY' });
                }
            })
            )
    }

    render() {
        console.log('type', this.props.diaryType, 'open', this.props.open, 'date', this.props.diaryDate)
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
        const selectDiaryTypes = this.state.selectDiaryTypes;
        const currentDiaryType = this.state.diaryType;
        console.log('currentDiaryType', currentDiaryType, currentDiaryType === null);
        var typeItem;
        if (currentDiaryType == null) {
            typeItem = selectDiaryTypes.map(
                (type) => (
                    <Chip style={{ margin: 4, cursor: 'pointer' }}
                        backgroundColor={blue300}
                        onClick={() => { this.updateCurrentDiaryType(type) } }>
                        {type}
                    </Chip>
                )
            )
        } else {
            typeItem = (
                <Chip style={{ margin: 4, title: '取消选择', cursor: 'pointer' }}
                    key={currentDiaryType}
                    onClick={this.handleRequestDelete}
                    backgroundColor={blue300}
                    >
                    {currentDiaryType}
                </Chip>
            )

        }
        return (
            <div>
                <Dialog
                    titleStyle={{ fontSize: 22, margin: 5 }}
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    style={styles.dialog}
                    >
                    <DatePicker
                        floatingLabelText="Ranged Date Picker"
                        hintText="选择日期"
                        autoOk={true}
                        defaultDate={this.state.diaryDate}
                        onChange={this.handleDateChange}
                        />
                    <div style={styles.diaryTypeBlock}>
                        选择类型:{typeItem}
                    </div>
                    <textarea style={styles.diaryContent}
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
    diaryTypeBlock: {
        height: '40px',
        lineHeight: '40px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    diaryContent: {
        width: '100%',
        height: 300,
        margin: '10px 0 0 0',
        borderRadius: 5
    }
}

function mapStateToProps(store) {
    return {
        open: store.diary.open,
        diaryType: store.diary.diaryType,
        diaryDate: store.diary.diaryDate
    }
}

export default connect(mapStateToProps)(EditDiary);