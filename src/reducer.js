const initialState = 10;

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INC': return ++state;
        case 'DEC': return --state;
        case 'PLUS': return state + action.payload
        default: return state;
    }
}