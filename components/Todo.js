import React, {PropTypes} from 'react'

const Todo = ({onClick, onDelete, onEdit, completed, text, color}) => (
    <div

        style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: color
        }}
    >
        {text}
        <button onClick={onClick}>{completed ? 'Incomplete' : 'Complete'}</button>
        <button onClick={onDelete}>Delete</button>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo
