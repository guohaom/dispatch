import  { combineReducers }  from 'redux';
import diaryReducer from './editDiaryReducer.js';

// key: value 使用 store.note 为对应的state对象, 如 store.note.open 获取 noteReducer 里的open属性
const rootReducers  = combineReducers({
    diary : diaryReducer
});

export default rootReducers;

