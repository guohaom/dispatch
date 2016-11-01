

const initialState = {
  open: false
};

export default function(state = initialState, action) {
    if( action.type == 'OPEN_EDIT_NOTE'){
        return Object.assign({},state,{
            open : true,
            editType : action.editType,
            date: action.date
        })
    }

    if( action.type == 'CLOSE_EDIT_NOTE'){
        return Object.assign({},...state,{
            open: false
        })
    }

    return initialState;



}
