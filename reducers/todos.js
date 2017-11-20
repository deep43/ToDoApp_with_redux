import actionTypes from '../actions/actionTypes';

const todo = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                id: action.id,
                text: action.todo.text,
                color: action.todo.color,
                completed: false
            };
        case actionTypes.EDIT_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                text: state.text
            });
        case actionTypes.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case actionTypes.REMOVE_TODO:
            return state.filter(t => t.id !== action.id);
        case actionTypes.EDIT_TODO:
            return state.map(t =>
                todo(t, action)
            );
        case actionTypes.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
}

export default todos
