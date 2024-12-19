const initialState = {
    data   : [],
};

const contentreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NAME_REDUCER_SUCCESS':
            return { ...state, data: action.payload.data }
        default:
            return state;
    }
};

export default contentreducer;
