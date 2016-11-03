/**
 * 登录后看到的页面
 */
import React, { Component } from 'react'
import DiaryList from './note/diaryList.js';

export default class IndexPanel extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={styles.indexBlock}>
                <DiaryList/>
            </div>
        )
    }

} 
const styles = {
    indexBlock:{
        display: 'flex',
        flexDirection: 'row'
    }
}