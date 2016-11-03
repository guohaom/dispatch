

const initialState = {
    open: false,
    diaryType: null,
    diaryDate: null
};

export default function (state = initialState, action) {
    if (action.type == 'OPEN_EDIT_DIARY') {
        return Object.assign({}, state, {
            open: true,
            diaryType: action.diaryType,
            diaryDate: action.diaryDate
        })
    }

    if (action.type == 'CLOSE_EDIT_DIARY') {
        return Object.assign({}, ...state, {
            open: false
        })
    }

    if (action.type == 'SWITCH_DIATY_TYPE') {
        return {
            open: true,
            diaryType: action.diaryType
        }
    }

    if (action.type == 'SWITCH_DIARY_DATE') {
        return {
            diaryDate: action.diaryDate
        }
    }

    return initialState;



}
