const initialState = {
    status : true,
    detail : true
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_WAITING':
            return { ...state, status: action.loading };
        default:
            return state;
    }
};

export default loadingReducer;
