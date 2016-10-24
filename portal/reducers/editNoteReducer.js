

const initialState = {
  open: false
};

export default function(state = initialState, action) {

    if( action.type == 'EDIT_NOTE'){

        return {
            open : true,
            editType : action.editType
        }

    }

    return initialState;



}
