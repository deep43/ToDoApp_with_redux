import React from 'react'


let AddTodoForm = ({onSubmit}) => {
    let input, select;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                onSubmit(input.value, select.value)
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>
                <select ref={node => {
                    select = node
                }}>
                    <option value="red" selected="true">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodoForm
