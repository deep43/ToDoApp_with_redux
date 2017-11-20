import actionTypes from './actionTypes';

let nextTodoId = 0;
export const addTodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        id: nextTodoId++,
        todo
    }
};

export const removeTodo = (id) => {
    return {
        type: actionTypes.REMOVE_TODO,
        id
    }
};

export const editTodo = (id) => {
    return {
        type: actionTypes.EDIT_TODO,
        id
    }
};

export const toggleTodo = (id) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    }
};
